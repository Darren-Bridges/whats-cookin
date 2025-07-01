"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Toggle } from "@/components/ui/toggle";
import { Heart, HeartOff } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { sampleRecipes } from "@/components/sampleRecipes";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { AddToMealPlanDialog } from "@/components/AddToMealPlanDialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { RecipeCard } from "@/components/RecipeCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { AddRecipeDialog } from "@/components/AddRecipeDialog";
import { CUISINES } from "@/constants/cuisines";
import { MOODS } from "@/constants/moods";

const moods = ["All", ...MOODS];
const allergens = ["peanuts", "gluten", "dairy", "eggs"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [mood, setMood] = useState("All");
  const [allergen, setAllergen] = useState("none");
  const [authOpen, setAuthOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [user, setUser] = useState<any>(null);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [mealPlanOpen, setMealPlanOpen] = useState(false);
  const [mealPlanRecipe, setMealPlanRecipe] = useState<any>(null);
  const [mealDate, setMealDate] = useState<Date | undefined>(undefined);
  const [mealType, setMealType] = useState<string>("");
  const [mealPlanLoading, setMealPlanLoading] = useState(false);
  const [mealPlanSuccess, setMealPlanSuccess] = useState("");
  const mealTypes = ["breakfast", "lunch", "dinner", "snack"];
  const [mealPlanOpenId, setMealPlanOpenId] = useState<string | number | null>(null);

  const filterCuisines = ["All", ...CUISINES];

  // Fetch favorites with TanStack Query
  const queryClient = useQueryClient();
  const { data: favorites = [], isLoading: loadingFavorites } = useQuery({
    queryKey: ["favorites", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data } = await supabase
        .from("favorites")
        .select("recipe_id")
        .eq("user_id", user.id);
      return data ? data.map((f: any) => f.recipe_id) : [];
    },
    enabled: !!user,
  });

  // Fetch user recipes from Supabase
  const { data: userRecipes = [], isLoading: loadingUserRecipes, refetch: refetchUserRecipes } = useQuery({
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

  // Mutations for add/remove favorite
  const toggleFavorite = useMutation({
    mutationFn: async (recipeId: string | number) => {
      if (!user) return;
      if (favorites.includes(recipeId)) {
        await supabase
          .from("favorites")
          .delete()
          .eq("user_id", user.id)
          .eq("recipe_id", recipeId);
        return favorites.filter((id: string | number) => id !== recipeId);
      } else {
        await supabase
          .from("favorites")
          .insert({ user_id: user.id, recipe_id: recipeId });
        return [...favorites, recipeId];
      }
    },
    onSuccess: (newFavorites) => {
      queryClient.setQueryData(["favorites", user?.id], newFavorites);
    },
  });

  // Remove useEffect for favorites and handleToggleFavorite
  const handleToggleFavorite = (recipeId: string | number) => {
    toggleFavorite.mutate(recipeId);
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    // Get current user on mount
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError("");
    if (authMode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setAuthError(error.message);
      else setAuthOpen(false);
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setAuthError(error.message);
      else setAuthOpen(false);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleAddToMealPlan = async () => {
    if (!user || !mealPlanRecipe || !mealDate || !mealType) return;
    setMealPlanLoading(true);
    setMealPlanSuccess("");
    await supabase.from("meal_plans").insert({
      user_id: user.id,
      recipe_id: mealPlanRecipe.id,
      date: format(mealDate, "yyyy-MM-dd"),
      meal_type: mealType,
    });
    setMealPlanLoading(false);
    setMealPlanSuccess("Added to meal plan!");
    setTimeout(() => setMealPlanOpen(false), 1000);
  };

  // Combine user recipes and sample recipes
  const allRecipes = [
    ...(user ? userRecipes : []),
    ...sampleRecipes
  ];

  const filteredRecipes = allRecipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some((ing: string) => ing.toLowerCase().includes(search.toLowerCase()));
    const matchesCuisine = cuisine === "All" || recipe.cuisine === cuisine;
    const matchesMood = mood === "All" || recipe.mood === mood;
    const excludesAllergen = allergen === "none" || !recipe.allergens.includes(allergen);
    const isFavorite = favorites.some((id: string | number) => String(id) === String(recipe.id));
    if (showFavorites && user) return isFavorite;
    return matchesSearch && matchesCuisine && matchesMood && excludesAllergen;
  });

  return (
    <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-2 w-full">
      {/* Search and Filters */}
      <Card className="w-full max-w-4xl p-6 rounded-xl shadow space-y-4 mb-8 mt-8">
        <CardContent className="p-0">
          <div className="flex flex-col gap-2">
            {/* Search bar on one line */}
            <Input
              id="search"
              type="text"
              placeholder="Search recipes or ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-1"
            />
            {/* Accordion trigger and Add Recipe button on one line */}
            <div className="flex flex-col sm:flex-row gap-2 items-stretch justify-between">
              <Accordion type="single" collapsible className="flex-1">
                <AccordionItem value="filters">
                  <AccordionTrigger className="text-base font-medium flex flex-row items-center gap-2 [&>svg]:hidden">
                    + Add filters
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col md:flex-row gap-4 mt-2">
                      <div>
                        <Label htmlFor="cuisine">Cuisine</Label>
                        <Select value={cuisine} onValueChange={setCuisine}>
                          <SelectTrigger id="cuisine" className="mt-1">
                            <SelectValue placeholder="Cuisine" />
                          </SelectTrigger>
                          <SelectContent>
                            {filterCuisines.map((c) => (
                              <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="mood">Mood</Label>
                        <Select value={mood} onValueChange={setMood}>
                          <SelectTrigger id="mood" className="mt-1">
                            <SelectValue placeholder="Mood" />
                          </SelectTrigger>
                          <SelectContent>
                            {moods.map((m) => (
                              <SelectItem key={m} value={m}>{m}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="allergen">Allergens</Label>
                        <Select value={allergen} onValueChange={setAllergen}>
                          <SelectTrigger id="allergen" className="mt-1">
                            <SelectValue placeholder="Allergens (exclude)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Allergens (exclude)</SelectItem>
                            {allergens.map((a) => (
                              <SelectItem key={a} value={a}>{a}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {user && (
                <div className="flex items-center sm:mt-0 mt-1">
                  <Link href="/recipes/new">
                    <Button variant="default">Add Recipe</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Favorites Toggle */}
      {user && (
        <div className="w-full max-w-6xl flex justify-end mb-4 pr-2">
          <Toggle
            pressed={showFavorites}
            onPressedChange={setShowFavorites}
            aria-label="Show Favorites"
          >
            <Heart className={showFavorites ? "fill-primary text-primary" : "text-muted-foreground"} />
            <span className="ml-2">Favorites</span>
          </Toggle>
        </div>
      )}
      {/* Recipe List */}
      {loadingFavorites || loadingUserRecipes ? (
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1 pb-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="h-full flex flex-col">
              <CardContent className="flex-1 flex flex-col gap-2">
                <Skeleton className="h-8 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-1/3 mb-1" />
                <div className="flex gap-2 mt-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredRecipes.length === 0 ? (
        <div className="text-center text-muted-foreground col-span-full">No recipes found.</div>
      ) : (
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1 pb-8">
          {filteredRecipes.map((recipe) => {
            const isFavorite = favorites.some((id: string | number) => String(id) === String(recipe.id));
            const mealPlanOpen = mealPlanOpenId === recipe.id;
            return (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                user={user}
                isFavorite={isFavorite}
                onToggleFavorite={() => handleToggleFavorite(recipe.id)}
                mealPlanOpen={mealPlanOpen}
                setMealPlanOpen={(open) => setMealPlanOpenId(open ? recipe.id : null)}
                mealPlanDialog={
                  <AddToMealPlanDialog
                    recipeId={recipe.id}
                    open={mealPlanOpen}
                    setOpen={(open) => setMealPlanOpenId(open ? recipe.id : null)}
                  />
                }
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
