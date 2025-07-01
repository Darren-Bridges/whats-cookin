"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { sampleRecipes } from "@/components/sampleRecipes";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { RecipeCard } from "@/components/RecipeCard";
import { AddToMealPlanDialog } from "@/components/AddToMealPlanDialog";

export default function FavoritesPage() {
  const [user, setUser] = useState<any>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [mealPlanOpenId, setMealPlanOpenId] = useState<string | number | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setUserLoading(false);
    });
  }, []);

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

  // Fetch user recipes with TanStack Query
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

  // Mutation for unfavorite
  const unfavorite = useMutation({
    mutationFn: async (recipeId: string) => {
      if (!user) return;
      await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user.id)
        .eq("recipe_id", recipeId);
      return favorites.filter((id: string) => id !== recipeId);
    },
    onSuccess: (newFavorites) => {
      queryClient.setQueryData(["favorites", user?.id], newFavorites);
    },
  });

  // Remove useEffect for favorites and handleUnfavorite
  const handleUnfavorite = (recipeId: string) => {
    unfavorite.mutate(recipeId);
  };

  if (userLoading) {
    // Show skeleton UI (same as loadingFavorites)
    return (
      <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-16 w-full">
        <h1 className="text-3xl font-bold mb-8 mt-8">My Favorites</h1>
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
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-background text-foreground pt-16 w-full">
        <div className="text-center text-lg">Please log in to view your favorites.</div>
      </main>
    );
  }

  const favoriteRecipes = allRecipes.filter((r) =>
    favorites.some((id) => String(id) === String(r.id))
  );

  return (
    <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-2 w-full">
      <h1 className="text-3xl font-bold mb-8 mt-8">My Favorites</h1>
      {loadingFavorites ? (
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
      ) : favoriteRecipes.length === 0 ? (
        <div className="text-center text-muted-foreground">You have no favorite recipes yet.</div>
      ) : (
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1 pb-8">
          {favoriteRecipes.map((recipe) => {
            const mealPlanOpen = mealPlanOpenId === recipe.id;
            return (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                user={user}
                isFavorite={true}
                onToggleFavorite={() => handleUnfavorite(recipe.id)}
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