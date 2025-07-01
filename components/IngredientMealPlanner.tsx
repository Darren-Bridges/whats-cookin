"use client";

import React, { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { sampleRecipes } from "@/components/sampleRecipes";
import { AddToMealPlanDialog } from "@/components/AddToMealPlanDialog";
import { ChefHat, Calendar, Clock, Users } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface IngredientMealPlannerProps {
  user: any;
  allRecipes: any[];
}

// Get all unique ingredients from recipes
const getAllIngredients = (recipes: any[]) => {
  const ingredientSet = new Set<string>();
  
  recipes.forEach(recipe => {
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

// Algorithm to find optimal meal combinations with automatic ingredient selection
const findOptimalMeals = (recipes: any[], numMeals: number) => {
  if (numMeals === 0) {
    return {
      meals: [],
      selectedIngredients: [],
      totalUsedIngredients: []
    };
  }
  // Only minimize_waste mode
  // Brute-force all combinations of numMeals recipes
  function getCombinations(arr: any[], k: number) {
    const results: any[][] = [];
    function helper(start: number, combo: any[]) {
      if (combo.length === k) {
        results.push(combo);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        helper(i + 1, combo.concat([arr[i]]));
      }
    }
    helper(0, []);
    return results;
  }
  const allCombos = getCombinations(recipes, numMeals);
  let minUnique = Infinity;
  let bestCombo: any[] = [];
  for (const combo of allCombos) {
    const allIngredients = new Set<string>();
    for (const recipe of combo) {
      recipe.ingredients.forEach((ing: any) => {
        const name = typeof ing === 'string' ? ing.toLowerCase() : ing.name.toLowerCase();
        allIngredients.add(name);
      });
    }
    if (allIngredients.size < minUnique) {
      minUnique = allIngredients.size;
      bestCombo = combo;
    }
  }
  const selectedMeals = bestCombo.map(recipe => {
    const recipeIngredients = recipe.ingredients.map((ing: any) => typeof ing === 'string' ? ing.toLowerCase() : ing.name.toLowerCase());
    return {
      recipe,
      score: 0,
      usedIngredients: recipeIngredients,
      unusedIngredients: []
    };
  });
  const usedIngredients = new Set<string>();
  selectedMeals.forEach(meal => {
    meal.usedIngredients.forEach((ing: string) => usedIngredients.add(ing));
  });
  return {
    meals: selectedMeals,
    selectedIngredients: [],
    totalUsedIngredients: Array.from(usedIngredients)
  };
};

export function IngredientMealPlanner({ user, allRecipes }: IngredientMealPlannerProps) {
  const [open, setOpen] = useState(false);
  const [numMeals, setNumMeals] = useState(3);
  const [mealPlanOpenId, setMealPlanOpenId] = useState<string | number | null>(null);
  
  const result = useMemo(() => 
    findOptimalMeals(allRecipes, numMeals),
    [allRecipes, numMeals]
  );
  
  const suggestedMeals = result.meals;
  const totalUsedIngredients = result.totalUsedIngredients;
  
  const handleReset = () => {
    setNumMeals(3);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ChefHat className="h-4 w-4" />
          Plan meals
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Plan Meals with Your Ingredients</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="numMeals">Number of Meals</Label>
              <Input
                id="numMeals"
                type="number"
                min="1"
                max="10"
                value={numMeals}
                onChange={(e) => setNumMeals(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                className="mt-1 w-32"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleReset} variant="outline">
                Reset
              </Button>
            </div>
          </div>
          {/* Results Section */}
          {numMeals > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Suggested Meals</h3>
                <div className="text-sm text-muted-foreground">
                  Using {totalUsedIngredients.length} unique ingredients
                </div>
              </div>
              {/* Waste Minimization Summary */}
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium text-green-600 mb-2">Waste Minimization Summary</h4>
                  <div className="text-sm text-muted-foreground">
                    <p>Found {suggestedMeals.length} meals using only {totalUsedIngredients.length} unique ingredients</p>
                    <p className="mt-1">This combination maximizes ingredient sharing to reduce food waste.</p>
                  </div>
                </CardContent>
              </Card>
              {suggestedMeals.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center text-muted-foreground">
                    No meal combination found. Try adjusting the number of meals.
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {suggestedMeals.map((mealScore: any, index: number) => {
                    const mealPlanOpen = mealPlanOpenId === mealScore.recipe.id;
                    return (
                      <Card key={mealScore.recipe.id} className="relative">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{mealScore.recipe.name}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {mealScore.recipe.time} min
                                </span>
                                <span>{mealScore.recipe.cuisine}</span>
                                <span>{mealScore.recipe.mood}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                onClick={() => setMealPlanOpenId(mealPlanOpen ? null : mealScore.recipe.id)}
                              >
                                Add to Plan
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <span className="text-sm font-medium text-green-600">Ingredients used:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {mealScore.usedIngredients.map((ing: string) => (
                                  <Badge key={ing} variant="default" className="text-xs">
                                    {ing}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <AddToMealPlanDialog
                            recipeId={mealScore.recipe.id}
                            open={mealPlanOpen}
                            setOpen={(open) => setMealPlanOpenId(open ? mealScore.recipe.id : null)}
                          />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 