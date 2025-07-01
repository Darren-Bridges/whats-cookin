"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { sampleRecipes } from "@/components/sampleRecipes";
import { format, addDays } from "date-fns";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';

export default function ShoppingListPage() {
  const [user, setUser] = useState<any>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [weekStart, setWeekStart] = useState(() => {
    const today = new Date();
    // Start week on Monday
    const start = new Date(today);
    const day = today.getDay();
    const diff = (day === 0 ? -6 : 1) - day;
    start.setDate(today.getDate() + diff);
    start.setHours(0, 0, 0, 0);
    return start;
  });
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setUserLoading(false);
    });
  }, []);

  // Fetch meal plans and custom items for the week using TanStack Query
  const weekStr = format(weekStart, "yyyy-MM-dd");
  const weekDates = Array.from({ length: 7 }, (_, i) => format(addDays(weekStart, i), "yyyy-MM-dd"));
  const queryClient = useQueryClient();

  const { data: mealPlans = [], isLoading: loadingMealPlans } = useQuery({
    queryKey: ["mealPlans", user?.id, weekStr],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase
        .from("meal_plans")
        .select("recipe_id")
        .eq("user_id", user.id)
        .in("date", weekDates);
      return data || [];
    },
    enabled: !!user,
  });

  const { data: customItems = [], isLoading: loadingCustomItems } = useQuery({
    queryKey: ["shoppingListItems", user?.id, weekStr],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase
        .from("shopping_list_items")
        .select("id, item, checked, auto")
        .eq("user_id", user.id)
        .eq("week_start", weekStr);
      return (data || []).filter((i) => !i.auto);
    },
    enabled: !!user,
  });

  const { data: checkedMap = {}, isLoading: loadingChecked } = useQuery({
    queryKey: ["shoppingListChecked", user?.id, weekStr],
    queryFn: async () => {
      if (!user) return {};
      const { data } = await supabase
        .from("shopping_list_items")
        .select("item, checked")
        .eq("user_id", user.id)
        .eq("week_start", weekStr);
      const map: { [item: string]: boolean } = {};
      (data || []).forEach((i) => {
        map[i.item] = i.checked;
      });
      return map;
    },
    enabled: !!user,
  });

  const { data: userRecipes = [], isLoading: loadingUserRecipes } = useQuery({
    queryKey: ["userRecipes", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase
        .from("recipes")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      return data || [];
    },
    enabled: !!user,
  });
  const allRecipes = [...userRecipes, ...sampleRecipes];

  const loading = loadingMealPlans || loadingCustomItems || loadingChecked || loadingUserRecipes;

  // Mutations
  const addCustomItem = useMutation({
    mutationFn: async (item: string) => {
      const { data, error } = await supabase
        .from("shopping_list_items")
        .insert({
          user_id: user.id,
          week_start: weekStr,
          item: item.trim(),
          checked: false,
          auto: false,
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoppingListItems", user?.id, weekStr] });
      queryClient.invalidateQueries({ queryKey: ["shoppingListChecked", user?.id, weekStr] });
      setNewItem("");
    },
  });

  const removeCustomItem = useMutation({
    mutationFn: async ({ id, item }: { id: string; item: string }) => {
      await supabase.from("shopping_list_items").delete().eq("id", id);
      return item;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoppingListItems", user?.id, weekStr] });
      queryClient.invalidateQueries({ queryKey: ["shoppingListChecked", user?.id, weekStr] });
    },
  });

  const toggleChecked = useMutation({
    mutationFn: async ({ item, isAuto }: { item: string; isAuto: boolean }) => {
      if (!user) return;
      // For auto items, check if exists first, then insert or update; for custom, update by id
      if (isAuto) {
        const { data: existing } = await supabase
          .from("shopping_list_items")
          .select("id, checked")
          .eq("user_id", user.id)
          .eq("week_start", weekStr)
          .eq("item", item)
          .eq("auto", true)
          .single();
        if (existing) {
          await supabase
            .from("shopping_list_items")
            .update({ checked: !existing.checked })
            .eq("id", existing.id);
        } else {
          await supabase.from("shopping_list_items").insert({
            user_id: user.id,
            week_start: weekStr,
            item,
            checked: true,
            auto: true,
          });
        }
      } else {
        const custom = customItems.find((i: any) => i.item === item);
        if (custom) {
          await supabase.from("shopping_list_items").update({ checked: !checkedMap[item] }).eq("id", custom.id);
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoppingListChecked", user?.id, weekStr] });
    },
  });

  // Auto-generate items from meal plan
  const autoItems = React.useMemo(() => {
    const recipeIds = mealPlans.map((m) => m.recipe_id);
    const ingredientsWithRecipes = recipeIds
      .map((id) => {
        const recipe = allRecipes.find((r: any) => String(r.id) === String(id));
        return recipe ? recipe.ingredients.map((ingredient: string) => ({
          ingredient,
          recipeName: recipe.name,
          recipeId: recipe.id
        })) : [];
      })
      .flat();
    
    // Group by ingredient and collect recipe names
    const grouped = ingredientsWithRecipes.reduce((acc: any, item: any) => {
      if (!acc[item.ingredient]) {
        acc[item.ingredient] = {
          ingredient: item.ingredient,
          recipes: []
        };
      }
      if (!acc[item.ingredient].recipes.find((r: any) => r.id === item.recipeId)) {
        acc[item.ingredient].recipes.push({
          id: item.recipeId,
          name: item.recipeName
        });
      }
      return acc;
    }, {} as { [key: string]: { ingredient: string; recipes: { id: string; name: string }[] } });
    
    return Object.values(grouped);
  }, [mealPlans, allRecipes]);

  // Helper function to format recipe names
  const formatRecipeNames = (recipes: { id: string; name: string }[]) => {
    if (recipes.length === 1) return `(${recipes[0].name})`;
    if (recipes.length === 2) return `(${recipes[0].name}, ${recipes[1].name})`;
    return `(${recipes[0].name} +${recipes.length - 1} more)`;
  };

  // Update handlers to use mutations
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim() || !user) return;
    addCustomItem.mutate(newItem);
  };

  const handleRemoveItem = (id: string, item: string) => {
    removeCustomItem.mutate({ id, item });
  };

  const handleCheck = (item: string, isAuto: boolean) => {
    toggleChecked.mutate({ item, isAuto });
  };

  if (userLoading) {
    // Show skeleton UI (same as loading)
    return (
      <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-2 w-full">
        <h1 className="text-3xl font-bold mb-8 mt-8">Shopping List</h1>
        <div className="w-full max-w-2xl">
          <Card className="w-full max-w-2xl mb-8">
            <CardContent className="p-4">
              <form className="flex gap-2 mb-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-20 rounded" />
              </form>
              <ul className="space-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded" />
                    <Skeleton className="h-4 w-1/2" />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }
  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-background text-foreground pt-2 w-full">
        <div className="text-center text-lg">Please log in to view your shopping list.</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-2 w-full">
      <h1 className="text-3xl font-bold mb-8 mt-8">Shopping List</h1>
      <div className="flex items-center justify-between w-full max-w-2xl mb-6">
        <Button variant="ghost" size="icon" onClick={() => setWeekStart(addDays(weekStart, -7))} aria-label="Previous Week">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="text-lg font-semibold">
          {format(weekStart, "MMM d")} - {format(addDays(weekStart, 6), "MMM d, yyyy")}
        </div>
        <Button variant="ghost" size="icon" onClick={() => setWeekStart(addDays(weekStart, 7))} aria-label="Next Week">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <Card className="w-full max-w-2xl mb-8">
        <CardContent className="p-4">
          <form onSubmit={handleAddItem} className="flex gap-2 mb-4">
            <Input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add custom item"
              className="flex-1"
            />
            <Button type="submit">Add</Button>
          </form>
          {loading ? (
            <ul className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-4 w-1/2" />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-2">
              {autoItems.map((item: any) => (
                <li key={item.ingredient} className="flex items-center gap-2">
                  <Checkbox
                    checked={!!checkedMap[item.ingredient]}
                    onCheckedChange={() => handleCheck(item.ingredient, true)}
                    id={`auto-${item.ingredient}`}
                  />
                  <label htmlFor={`auto-${item.ingredient}`} className="flex-1 cursor-pointer">
                    <span className="font-medium">{item.ingredient}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {formatRecipeNames(item.recipes)}
                    </span>
                  </label>
                </li>
              ))}
              {customItems.map((i: any) => (
                <li key={i.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={!!checkedMap[i.item]}
                    onCheckedChange={() => handleCheck(i.item, false)}
                    id={`custom-${i.id}`}
                  />
                  <label htmlFor={`custom-${i.id}`} className="flex-1 cursor-pointer">
                    {i.item}
                  </label>
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(i.id, i.item)} aria-label="Remove">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </li>
              ))}
              {autoItems.length === 0 && customItems.length === 0 && (
                <li className="text-muted-foreground text-center">No items for this week.</li>
              )}
            </ul>
          )}
        </CardContent>
      </Card>
    </main>
  );
} 