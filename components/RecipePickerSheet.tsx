"use client";
import React, { useState, useMemo } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Heart } from "lucide-react";
import { CUISINES } from "@/constants/cuisines";

const moods = ["All", "Adventurous", "Comfort", "Healthy", "Spicy", "Breakfast", "Hearty", "Classic", "Savory"];
const allergens = ["peanuts", "gluten", "dairy", "eggs", "soy"];

export interface RecipePickerSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  allRecipes: any[];
  favorites?: (string | number)[];
  date: string;
  mealType: string;
  onAdd: (recipe: any) => void;
  loading?: boolean;
}

export function RecipePickerSheet({
  open,
  onOpenChange,
  allRecipes,
  favorites = [],
  date,
  mealType,
  onAdd,
  loading = false,
}: RecipePickerSheetProps) {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [mood, setMood] = useState("All");
  const [allergen, setAllergen] = useState("none");
  const [showFavorites, setShowFavorites] = useState(false);

  const filterCuisines = useMemo(() => ["All", ...CUISINES], []);

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.ingredients.some((ing: string) => ing.toLowerCase().includes(search.toLowerCase()));
      const matchesCuisine = cuisine === "All" || recipe.cuisine === cuisine;
      const matchesMood = mood === "All" || recipe.mood === mood;
      const excludesAllergen = allergen === "none" || !recipe.allergens.includes(allergen);
      const isFavorite = favorites.some((id) => String(id) === String(recipe.id));
      if (showFavorites) return isFavorite && matchesSearch && matchesCuisine && matchesMood && excludesAllergen;
      return matchesSearch && matchesCuisine && matchesMood && excludesAllergen;
    });
  }, [allRecipes, search, cuisine, mood, allergen, showFavorites, favorites]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[90vh] overflow-y-auto w-full">
        <SheetHeader>
          <SheetTitle>
            Add Recipe to {mealType.charAt(0).toUpperCase() + mealType.slice(1)} on {date}
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-4 mt-4">
          <Input
            id="search"
            type="text"
            placeholder="Search recipes or ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-1"
          />
          <div className="flex flex-col sm:flex-row gap-2 items-stretch justify-between">
            <div className="flex-1 flex gap-2">
              <Select value={cuisine} onValueChange={setCuisine}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  {filterCuisines.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={mood} onValueChange={setMood}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Mood" />
                </SelectTrigger>
                <SelectContent>
                  {moods.map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={allergen} onValueChange={setAllergen}>
                <SelectTrigger className="w-40">
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
            <Toggle
              pressed={showFavorites}
              onPressedChange={setShowFavorites}
              aria-label="Show Favorites"
              className="ml-2"
            >
              <Heart className={showFavorites ? "fill-primary text-primary" : "text-muted-foreground"} />
              <span className="ml-2">Favorites</span>
            </Toggle>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[40vh] overflow-y-auto">
            {filteredRecipes.length === 0 ? (
              <div className="text-center text-muted-foreground col-span-full">No recipes found.</div>
            ) : (
              filteredRecipes.map((recipe) => (
                <Card key={recipe.id} className="cursor-pointer hover:ring-2 hover:ring-primary transition" onClick={() => onAdd(recipe)}>
                  <CardContent className="p-4 flex flex-col gap-2">
                    <div className="text-base font-semibold mb-1">{recipe.name}</div>
                    <div className="text-xs text-muted-foreground mb-1">
                      {recipe.cuisine} &bull; {recipe.mood} &bull; {recipe.time} min
                    </div>
                    <div className="text-xs">Ingredients: {recipe.ingredients.join(", ")}</div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 