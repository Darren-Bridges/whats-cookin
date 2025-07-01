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
import { ChefHat, Calendar, Clock, Users, Plus, X, Settings } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CUISINES } from "@/constants/cuisines";
import { MOODS } from "@/constants/moods";

interface IngredientMealPlannerProps {
  user: any;
  allRecipes: any[];
}

interface MealRule {
  id: string;
  type: 'cuisine' | 'ingredient' | 'dietary';
  condition: 'at_least' | 'exactly' | 'at_most';
  value: number;
  target: string;
  description: string;
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

// Check if a recipe matches a rule
const recipeMatchesRule = (recipe: any, rule: MealRule): boolean => {
  // Safety check - ensure recipe exists and has required properties
  if (!recipe || !rule.target) {
    return false;
  }

  switch (rule.type) {
    case 'cuisine':
      return recipe.cuisine?.toLowerCase() === rule.target.toLowerCase();
    
    case 'ingredient':
      if (!recipe.ingredients || !Array.isArray(recipe.ingredients)) {
        return false;
      }
      return recipe.ingredients.some((ing: any) => {
        if (!ing) return false;
        const ingredientName = typeof ing === 'string' ? ing.toLowerCase() : ing.name?.toLowerCase();
        if (!ingredientName) return false;
        return ingredientName.includes(rule.target.toLowerCase()) || 
               rule.target.toLowerCase().includes(ingredientName);
      });
    
    case 'dietary':
      if (rule.target.toLowerCase() === 'veggie' || rule.target.toLowerCase() === 'vegetarian') {
        if (!recipe.ingredients || !Array.isArray(recipe.ingredients)) {
          return false;
        }
        // Check if recipe has any meat ingredients (simplified check)
        const meatKeywords = ['chicken', 'beef', 'pork', 'lamb', 'fish', 'shrimp', 'bacon', 'sausage', 'meat'];
        return !recipe.ingredients.some((ing: any) => {
          if (!ing) return false;
          const ingredientName = typeof ing === 'string' ? ing.toLowerCase() : ing.name?.toLowerCase();
          if (!ingredientName) return false;
          return meatKeywords.some(meat => ingredientName.includes(meat));
        });
      }
      return false;
    
    default:
      return false;
  }
};

// Check if a combination of meals satisfies all rules
const satisfiesRules = (meals: any[], rules: MealRule[]): boolean => {
  for (const rule of rules) {
    const matchingMeals = meals.filter(meal => recipeMatchesRule(meal.recipe, rule));
    
    switch (rule.condition) {
      case 'at_least':
        if (matchingMeals.length < rule.value) return false;
        break;
      case 'exactly':
        if (matchingMeals.length !== rule.value) return false;
        break;
      case 'at_most':
        if (matchingMeals.length > rule.value) return false;
        break;
    }
  }
  return true;
};

// Algorithm to find optimal meal combinations with rules
const findOptimalMeals = (recipes: any[], numMeals: number, rules: MealRule[]) => {
  if (numMeals === 0) {
    return {
      meals: [],
      selectedIngredients: [],
      totalUsedIngredients: [],
      rulesSatisfied: true
    };
  }

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
  let rulesSatisfied = false;

  // First, find all combinations that satisfy the rules
  const validCombos: any[][] = [];
  for (const combo of allCombos) {
    if (satisfiesRules(combo, rules)) {
      validCombos.push(combo);
    }
  }

  // If we have valid combinations that satisfy rules, optimize for waste minimization among them
  if (validCombos.length > 0) {
    rulesSatisfied = true;
    for (const combo of validCombos) {
      const allIngredients = new Set<string>();
      for (const recipe of combo) {
        if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
          recipe.ingredients.forEach((ing: any) => {
            if (ing) {
              const name = typeof ing === 'string' ? ing.toLowerCase() : ing.name?.toLowerCase();
              if (name) {
                allIngredients.add(name);
              }
            }
          });
        }
      }
      if (allIngredients.size < minUnique) {
        minUnique = allIngredients.size;
        bestCombo = combo;
      }
    }
  } else {
    // If no combination satisfies all rules, find the combination that satisfies the most rules
    let maxRulesSatisfied = 0;
    let bestComboByRules: any[] = [];
    
    for (const combo of allCombos) {
      let rulesSatisfiedCount = 0;
      for (const rule of rules) {
        const matchingMeals = combo.filter(recipe => recipeMatchesRule(recipe, rule));
        
        switch (rule.condition) {
          case 'at_least':
            if (matchingMeals.length >= rule.value) rulesSatisfiedCount++;
            break;
          case 'exactly':
            if (matchingMeals.length === rule.value) rulesSatisfiedCount++;
            break;
          case 'at_most':
            if (matchingMeals.length <= rule.value) rulesSatisfiedCount++;
            break;
        }
      }
      
      if (rulesSatisfiedCount > maxRulesSatisfied) {
        maxRulesSatisfied = rulesSatisfiedCount;
        bestComboByRules = combo;
      }
    }
    
    // Use the combo that satisfies the most rules, then optimize for waste minimization
    if (bestComboByRules.length > 0) {
      bestCombo = bestComboByRules;
      const allIngredients = new Set<string>();
      for (const recipe of bestCombo) {
        if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
          recipe.ingredients.forEach((ing: any) => {
            if (ing) {
              const name = typeof ing === 'string' ? ing.toLowerCase() : ing.name?.toLowerCase();
              if (name) {
                allIngredients.add(name);
              }
            }
          });
        }
      }
      minUnique = allIngredients.size;
    } else {
      // Fallback to original algorithm if no rules can be satisfied at all
      for (const combo of allCombos) {
        const allIngredients = new Set<string>();
        for (const recipe of combo) {
          if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
            recipe.ingredients.forEach((ing: any) => {
              if (ing) {
                const name = typeof ing === 'string' ? ing.toLowerCase() : ing.name?.toLowerCase();
                if (name) {
                  allIngredients.add(name);
                }
              }
            });
          }
        }
        if (allIngredients.size < minUnique) {
          minUnique = allIngredients.size;
          bestCombo = combo;
        }
      }
    }
  }

  const selectedMeals = bestCombo.map(recipe => {
    const recipeIngredients: string[] = [];
    if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach((ing: any) => {
        if (ing) {
          const name = typeof ing === 'string' ? ing.toLowerCase() : ing.name?.toLowerCase();
          if (name) {
            recipeIngredients.push(name);
          }
        }
      });
    }
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
    totalUsedIngredients: Array.from(usedIngredients),
    rulesSatisfied
  };
};

export function IngredientMealPlanner({ user, allRecipes }: IngredientMealPlannerProps) {
  const [open, setOpen] = useState(false);
  const [numMeals, setNumMeals] = useState(3);
  const [mealPlanOpenId, setMealPlanOpenId] = useState<string | number | null>(null);
  const [rules, setRules] = useState<MealRule[]>([]);
  const [showRules, setShowRules] = useState(false);
  
  const result = useMemo(() => 
    findOptimalMeals(allRecipes, numMeals, rules),
    [allRecipes, numMeals, rules]
  );
  
  const suggestedMeals = result.meals;
  const totalUsedIngredients = result.totalUsedIngredients;
  const rulesSatisfied = result.rulesSatisfied;
  
  const handleReset = () => {
    setNumMeals(3);
    setRules([]);
  };

  const addRule = () => {
    const newRule: MealRule = {
      id: Date.now().toString(),
      type: 'cuisine',
      condition: 'at_least',
      value: 1,
      target: '',
      description: ''
    };
    setRules([...rules, newRule]);
  };

  const updateRule = (id: string, updates: Partial<MealRule>) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, ...updates } : rule
    ));
  };

  const removeRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const generateRuleDescription = (rule: MealRule): string => {
    const conditionText = rule.condition === 'at_least' ? 'at least' : 
                         rule.condition === 'exactly' ? 'exactly' : 'at most';
    const valueText = rule.value === 1 ? '1 meal' : `${rule.value} meals`;
    
    switch (rule.type) {
      case 'cuisine':
        return `${conditionText} ${valueText} from ${rule.target} cuisine`;
      case 'ingredient':
        return `${conditionText} ${valueText} using ${rule.target}`;
      case 'dietary':
        return `${conditionText} ${valueText} that is ${rule.target}`;
      default:
        return '';
    }
  };

  const countSatisfiedRules = (meals: any[], rules: MealRule[]): { satisfied: number, total: number, details: { rule: MealRule, satisfied: boolean, count: number }[] } => {
    if (rules.length === 0) {
      return { satisfied: 0, total: 0, details: [] };
    }

    const details = rules.map(rule => {
      const matchingMeals = meals.filter(meal => recipeMatchesRule(meal.recipe, rule));
      let satisfied = false;
      
      switch (rule.condition) {
        case 'at_least':
          satisfied = matchingMeals.length >= rule.value;
          break;
        case 'exactly':
          satisfied = matchingMeals.length === rule.value;
          break;
        case 'at_most':
          satisfied = matchingMeals.length <= rule.value;
          break;
      }
      
      return { rule, satisfied, count: matchingMeals.length };
    });

    const satisfied = details.filter(d => d.satisfied).length;
    return { satisfied, total: rules.length, details };
  };

  const cuisineOptions: MultiSelectOption[] = CUISINES.map(cuisine => ({ value: cuisine, label: cuisine }));
  const ingredientOptions: MultiSelectOption[] = getAllIngredients(allRecipes);
  const dietaryOptions: MultiSelectOption[] = [
    { value: 'veggie', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-free' }
  ];

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

            {/* Rules Section */}
            <Accordion type="single" collapsible value={showRules ? "rules" : undefined}>
              <AccordionItem value="rules">
                <AccordionTrigger 
                  className="flex items-center gap-2"
                  onClick={() => setShowRules(!showRules)}
                >
                  <Settings className="h-4 w-4" />
                  Meal Planning Rules
                  {rules.length > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {rules.length}
                    </Badge>
                  )}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 mt-4">
                    {rules.length === 0 && (
                      <p className="text-sm text-muted-foreground">
                        Add rules to customize your meal plan. For example: "at least 1 American meal" or "2 meals with sausages".
                      </p>
                    )}
                    
                    {rules.map((rule) => (
                      <Card key={rule.id} className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Rule</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeRule(rule.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <Label className="text-xs">Type</Label>
                              <Select
                                value={rule.type}
                                onValueChange={(value: 'cuisine' | 'ingredient' | 'dietary') => 
                                  updateRule(rule.id, { type: value, target: '' })
                                }
                              >
                                <SelectTrigger className="h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="cuisine">Cuisine</SelectItem>
                                  <SelectItem value="ingredient">Ingredient</SelectItem>
                                  <SelectItem value="dietary">Dietary</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label className="text-xs">Condition</Label>
                              <Select
                                value={rule.condition}
                                onValueChange={(value: 'at_least' | 'exactly' | 'at_most') => 
                                  updateRule(rule.id, { condition: value })
                                }
                              >
                                <SelectTrigger className="h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="at_least">At least</SelectItem>
                                  <SelectItem value="exactly">Exactly</SelectItem>
                                  <SelectItem value="at_most">At most</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <Label className="text-xs">Number</Label>
                              <Input
                                type="number"
                                min="1"
                                max={numMeals}
                                value={rule.value}
                                onChange={(e) => updateRule(rule.id, { value: parseInt(e.target.value) || 1 })}
                                className="h-8"
                              />
                            </div>
                            
                            <div>
                              <Label className="text-xs">Target</Label>
                              {rule.type === 'cuisine' && (
                                <Select
                                  value={rule.target}
                                  onValueChange={(value) => updateRule(rule.id, { target: value })}
                                >
                                  <SelectTrigger className="h-8">
                                    <SelectValue placeholder="Select cuisine" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {cuisineOptions.map(option => (
                                      <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                              
                              {rule.type === 'ingredient' && (
                                <Select
                                  value={rule.target}
                                  onValueChange={(value) => updateRule(rule.id, { target: value })}
                                >
                                  <SelectTrigger className="h-8">
                                    <SelectValue placeholder="Select ingredient" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {ingredientOptions.map(option => (
                                      <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                              
                              {rule.type === 'dietary' && (
                                <Select
                                  value={rule.target}
                                  onValueChange={(value) => updateRule(rule.id, { target: value })}
                                >
                                  <SelectTrigger className="h-8">
                                    <SelectValue placeholder="Select dietary" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {dietaryOptions.map(option => (
                                      <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                            </div>
                          </div>
                          
                          {rule.target && (
                            <div className="text-sm text-muted-foreground bg-muted p-2 rounded">
                              {generateRuleDescription(rule)}
                            </div>
                          )}
                        </div>
                      </Card>
                    ))}
                    
                    <Button onClick={addRule} variant="outline" size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Rule
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

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

              {/* Rules Status */}
              {rules.length > 0 && (
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Rules Status</h4>
                    {(() => {
                      const ruleStatus = countSatisfiedRules(suggestedMeals, rules);
                      return (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              {ruleStatus.satisfied} of {ruleStatus.total} rules satisfied
                            </span>
                            {ruleStatus.satisfied === ruleStatus.total ? (
                              <Badge variant="default" className="text-xs">All Rules Met</Badge>
                            ) : ruleStatus.satisfied > 0 ? (
                              <Badge variant="secondary" className="text-xs">Partial</Badge>
                            ) : (
                              <Badge variant="destructive" className="text-xs">No Rules Met</Badge>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            {ruleStatus.details.map((detail, index) => (
                              <div key={index} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${detail.satisfied ? 'bg-green-500' : 'bg-red-500'}`} />
                                  <span className={detail.satisfied ? 'text-green-700' : 'text-red-700'}>
                                    {generateRuleDescription(detail.rule)}
                                  </span>
                                </div>
                                <span className="text-muted-foreground">
                                  {detail.count} meal{detail.count !== 1 ? 's' : ''} found
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          {!rulesSatisfied && rules.length > 0 && ruleStatus.satisfied < ruleStatus.total && (
                            <div className="mt-2 text-sm text-amber-600 bg-amber-50 p-2 rounded">
                              ⚠️ Could not find a combination that satisfies all rules. Showing the best available option that satisfies {ruleStatus.satisfied} of {ruleStatus.total} rules.
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </CardContent>
                </Card>
              )}

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
                    No meal combination found. Try adjusting the number of meals or rules.
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