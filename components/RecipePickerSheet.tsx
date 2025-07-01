"use client";
import React, { useState, useMemo } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Heart } from "lucide-react";
import { CUISINES } from "@/constants/cuisines";
import { MOODS } from "@/constants/moods";
import { ALLERGENS } from "@/constants/allergens";

const moodOptions: MultiSelectOption[] = MOODS.map(mood => ({ value: mood, label: mood }));
const allergenOptions: MultiSelectOption[] = ALLERGENS.map(allergen => ({ value: allergen, label: allergen }));
const cuisineOptions: MultiSelectOption[] = CUISINES.map(cuisine => ({ value: cuisine, label: cuisine }));

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
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [moods, setMoods] = useState<string[]>([]);
  const [allergens, setAllergens] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.ingredients.some((ing: string) => ing.toLowerCase().includes(search.toLowerCase()));
      const matchesCuisine = cuisines.length === 0 || cuisines.includes(recipe.cuisine);
      const matchesMood = moods.length === 0 || moods.includes(recipe.mood);
      const excludesAllergen = allergens.length === 0 || !recipe.allergens.some((allergen: string) => allergens.includes(allergen));
      const isFavorite = favorites.some((id) => String(id) === String(recipe.id));
      if (showFavorites) return isFavorite && matchesSearch && matchesCuisine && matchesMood && excludesAllergen;
      return matchesSearch && matchesCuisine && matchesMood && excludesAllergen;
    });
  }, [allRecipes, search, cuisines, moods, allergens, showFavorites, favorites]);

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
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div>
                <label className="text-sm font-medium mb-1 block">Cuisine</label>
                <MultiSelect
                  options={cuisineOptions}
                  selected={cuisines}
                  onChange={setCuisines}
                  placeholder="Select cuisines..."
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Mood</label>
                <MultiSelect
                  options={moodOptions}
                  selected={moods}
                  onChange={setMoods}
                  placeholder="Select moods..."
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Allergens (exclude)</label>
                <MultiSelect
                  options={allergenOptions}
                  selected={allergens}
                  onChange={setAllergens}
                  placeholder="Select allergens to exclude..."
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Toggle
                pressed={showFavorites}
                onPressedChange={setShowFavorites}
                aria-label="Show Favorites"
              >
                <Heart className={showFavorites ? "fill-primary text-primary" : "text-muted-foreground"} />
                <span className="ml-2">Favorites</span>
              </Toggle>
            </div>
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