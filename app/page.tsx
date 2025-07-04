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
import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { CUISINES } from "@/constants/cuisines";
import { MOODS } from "@/constants/moods";
import { ALLERGENS } from "@/constants/allergens";
import { IngredientMealPlanner } from "@/components/IngredientMealPlanner";

const moodOptions: MultiSelectOption[] = MOODS.map(mood => ({ value: mood, label: mood }));
const allergenOptions: MultiSelectOption[] = ALLERGENS.map(allergen => ({ value: allergen, label: allergen }));
const cuisineOptions: MultiSelectOption[] = CUISINES.map(cuisine => ({ value: cuisine, label: cuisine }));

// Get all unique ingredients from sample recipes for the available ingredients filter
const getAllIngredients = () => {
  const ingredientSet = new Set<string>();
  
  sampleRecipes.forEach(recipe => {
    recipe.ingredients.forEach((ingredient: any) => {
      if (typeof ingredient === 'string') {
        ingredientSet.add(ingredient.toLowerCase());
      } else if (ingredient.name) {
        ingredientSet.add(ingredient.name.toLowerCase());
      }
    });
  });
  
  // Create a more user-friendly list by consolidating similar ingredients
  const consolidatedIngredients = new Map<string, string>();
  
  Array.from(ingredientSet).sort().forEach(ingredient => {
    // Create a base ingredient name for matching
    const baseName = ingredient.split(' ')[0]; // e.g., "onion" from "red onion"
    
    if (!consolidatedIngredients.has(baseName)) {
      // Use the shortest version as the base
      consolidatedIngredients.set(baseName, ingredient);
    } else {
      // If we already have a base, keep the shorter one
      const existing = consolidatedIngredients.get(baseName)!;
      if (ingredient.length < existing.length) {
        consolidatedIngredients.set(baseName, ingredient);
      }
    }
  });
  
  return Array.from(consolidatedIngredients.values()).map(ingredient => ({
    value: ingredient,
    label: ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
  }));
};

const ingredientOptions: MultiSelectOption[] = getAllIngredients();

export default function Home() {
  const [search, setSearch] = useState("");
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [moods, setMoods] = useState<string[]>([]);
  const [allergens, setAllergens] = useState<string[]>([]);
  const [availableIngredients, setAvailableIngredients] = useState<string[]>([]);
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
      recipe.ingredients.some((ing: any) => {
        if (typeof ing === 'string') {
          return ing.toLowerCase().includes(search.toLowerCase());
        }
        return ing.name.toLowerCase().includes(search.toLowerCase());
      });
    const matchesCuisine = cuisines.length === 0 || cuisines.includes(recipe.cuisine);
    const matchesMood = moods.length === 0 || moods.includes(recipe.mood);
    const excludesAllergen = allergens.length === 0 || !recipe.allergens.some((allergen: string) => allergens.includes(allergen));
    
    // Check if recipe contains all selected available ingredients
    const canMakeWithAvailableIngredients = availableIngredients.length === 0 ||
      availableIngredients.every((available) => {
        const availableLower = available.toLowerCase();
        return recipe.ingredients.some((ingredient: any) => {
          const ingredientName = typeof ingredient === 'string' ? ingredient.toLowerCase() : ingredient.name.toLowerCase();
          return (
            ingredientName.includes(availableLower) ||
            availableLower.includes(ingredientName) ||
            ingredientName.split(' ').some((word: string) => word === availableLower) ||
            availableLower.split(' ').some((word: string) => word === ingredientName)
          );
        });
      });
    
    const isFavorite = favorites.some((id: string | number) => String(id) === String(recipe.id));
    if (showFavorites && user) return isFavorite;
    return matchesSearch && matchesCuisine && matchesMood && excludesAllergen && canMakeWithAvailableIngredients;
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
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div>
                          <Label htmlFor="cuisine">Cuisine</Label>
                          <MultiSelect
                            options={cuisineOptions}
                            selected={cuisines}
                            onChange={setCuisines}
                            placeholder="Select cuisines..."
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mood">Mood</Label>
                          <MultiSelect
                            options={moodOptions}
                            selected={moods}
                            onChange={setMoods}
                            placeholder="Select moods..."
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="allergen">Allergens (exclude)</Label>
                          <MultiSelect
                            options={allergenOptions}
                            selected={allergens}
                            onChange={setAllergens}
                            placeholder="Select allergens to exclude..."
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="ingredients">Ingredients I Have</Label>
                        <MultiSelect
                          options={ingredientOptions}
                          selected={availableIngredients}
                          onChange={setAvailableIngredients}
                          placeholder="Select ingredients you have..."
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {user && (
                <div className="flex items-center gap-2 sm:mt-0 mt-1">
                  <IngredientMealPlanner user={user} allRecipes={allRecipes} />
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
