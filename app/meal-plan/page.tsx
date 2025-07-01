"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { sampleRecipes } from "@/components/sampleRecipes";
import { format, addDays } from "date-fns";
import { ChevronLeft, ChevronRight, PlusCircle, Eye, Trash2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useDroppable, useDraggable } from '@dnd-kit/core';
import { Tooltip } from "@/components/ui/tooltip";
import { RecipePickerSheet } from "@/components/RecipePickerSheet";
import { IngredientMealPlanner } from "@/components/IngredientMealPlanner";

const mealTypes = ["breakfast", "lunch", "dinner", "snack"];

function DraggableMealCard({ meal, recipe, disabled, handleRemoveMeal }: { meal: any, recipe: any, disabled: boolean, handleRemoveMeal: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: meal.id,
    disabled,
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        cursor: disabled ? 'not-allowed' : 'grab',
        position: 'relative',
      }}
      {...attributes}
      {...listeners}
      aria-disabled={disabled}
    >
      <Card className="mb-3 relative">
        {/* View icon top right */}
        <div className="absolute top-2 right-2 z-10">
          <Tooltip content="View Recipe">
            <Link href={`/recipes/${recipe.id}`}>
              <Button variant="ghost" size="icon" className="h-7 w-7 p-0" tabIndex={-1}>
                <Eye className="w-4 h-4" />
                <span className="sr-only">View</span>
              </Button>
            </Link>
          </Tooltip>
        </div>
        {/* Remove icon bottom right */}
        {!disabled && (
          <div className="absolute bottom-2 right-2 z-10">
            <Tooltip content="Remove from meal plan">
              <Button variant="ghost" size="icon" className="h-7 w-7 p-0 text-destructive hover:bg-destructive/10" onClick={() => handleRemoveMeal(meal.id)} tabIndex={-1}>
                <Trash2 className="w-4 h-4" />
                <span className="sr-only">Remove</span>
              </Button>
            </Tooltip>
          </div>
        )}
        <CardContent className="p-4 flex flex-col gap-2">
          <div>
            <div className="text-sm text-muted-foreground mb-1 capitalize">{meal.meal_type}</div>
            <h3 className="text-lg font-semibold mb-1">{recipe.name}</h3>
            <div className="text-xs text-muted-foreground mb-1">
              {recipe.cuisine} &bull; {recipe.time} min
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DroppableMealSlot({ dateStr, mealType, children, isOver, isPast }: { dateStr: string, mealType: string, children: React.ReactNode, isOver: boolean, isPast: boolean }) {
  const { setNodeRef } = useDroppable({
    id: `${dateStr}_${mealType}`,
    // Allow drop even if isPast
    // disabled: isPast,
  });
  return (
    <div
      ref={setNodeRef}
      className={`min-h-[40px] ${isOver ? 'ring-2 ring-primary' : ''} ${isPast ? 'opacity-60' : ''}`}
      style={{ transition: 'box-shadow 0.2s' }}
    >
      {children}
    </div>
  );
}

function PlaceholderCard({ mealType, onClick }: { mealType: string, onClick?: () => void }) {
  return (
    <Card className="mb-3 border-dashed border-2 border-muted-foreground/40 bg-muted/30 cursor-pointer" onClick={onClick}>
      <CardContent className="p-4 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <PlusCircle className="w-8 h-8 opacity-30 mb-1" />
        <div className="text-sm font-medium capitalize">{mealType}</div>
        <div className="text-xs">Drag a recipe here</div>
      </CardContent>
    </Card>
  );
}

export default function MealPlanPage() {
  const [user, setUser] = useState<any>(null);
  const [userLoading, setUserLoading] = useState(true);
  const queryClient = useQueryClient();
  const [weekStart, setWeekStart] = useState(() => {
    const today = new Date();
    // Start week on Monday
    const start = new Date(today);
    const day = today.getDay();
    const diff = (day === 0 ? -6 : 1) - day; // if Sunday, go back 6 days; else, go back to Monday
    start.setDate(today.getDate() + diff);
    start.setHours(0, 0, 0, 0);
    return start;
  });
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSlot, setPickerSlot] = useState<{ date: string, mealType: string } | null>(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setUserLoading(false);
    });
  }, []);
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const { data: mealPlans = [], isLoading: loadingMealPlans, error, refetch } = useQuery({
    queryKey: ["mealPlans", user?.id, weekStart.toISOString()],
    queryFn: async () => {
      if (!user) return [];
      const weekDateStrings = weekDates.map(date => format(date, "yyyy-MM-dd"));
      const { data } = await supabase
        .from("meal_plans")
        .select("id, date, meal_type, recipe_id")
        .eq("user_id", user.id)
        .in("date", weekDateStrings);
      return data || [];
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
  const removeMeal = useMutation({
    mutationFn: async (id: string) => {
      await supabase.from("meal_plans").delete().eq("id", id);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData(["mealPlans", user?.id, weekStart.toISOString()], (old: any[] = []) =>
        old.filter((m) => m.id !== id)
      );
    },
  });
  const updateMeal = useMutation({
    mutationFn: async ({ id, date, meal_type }: { id: string, date: string, meal_type: string }) => {
      await supabase.from('meal_plans').update({ date, meal_type }).eq('id', id);
      return { id, date, meal_type };
    },
    onSuccess: ({ id, date, meal_type }) => {
      queryClient.setQueryData(["mealPlans", user?.id, weekStart.toISOString()], (old: any[] = []) =>
        old.map((m) => m.id === id ? { ...m, date, meal_type } : m)
      );
    },
  });
  function handleRemoveMeal(id: string) {
    removeMeal.mutate(id);
  }
  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }
  function handleDragOver(event: any) {
    setOverId(event.over?.id || null);
  }
  function handleDragEnd(event: any) {
    setActiveId(null);
    setOverId(null);
    const { active, over } = event;
    if (!over || !active) return;
    if (active.id === over.id) return;
    // Parse over.id: "date_mealtype"
    const [date, ...mealTypeParts] = over.id.split('_');
    const meal_type = mealTypeParts.join('_');
    const meal = mealPlans.find((m) => m.id === active.id);
    if (!meal) return;
    // Allow moving to any date (including past)
    // const targetDate = new Date(date);
    // if (targetDate < today) return;
    updateMeal.mutate({ id: meal.id, date, meal_type });
  }
  async function handleAddMealPlan(recipe: any, date: string, mealType: string) {
    if (!user) return;
    await supabase.from("meal_plans").insert({
      user_id: user.id,
      recipe_id: recipe.id,
      date,
      meal_type: mealType,
    });
    queryClient.invalidateQueries({ queryKey: ["mealPlans", user?.id, weekStart.toISOString()] });
    setPickerOpen(false);
    setPickerSlot(null);
  }
  // Fetch favorites with TanStack Query (for favorites filter in RecipePickerSheet)
  const { data: favorites = [] } = useQuery({
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
  if (userLoading) {
    // Show skeleton UI (same as loadingMealPlans)
    return (
      <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-2 w-full">
        <h1 className="text-3xl font-bold mb-8 mt-8">My Meal Plan</h1>
        <div className="w-full max-w-4xl space-y-8">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="border-b pb-6 opacity-60">
              <Skeleton className="h-6 w-1/3 mb-2" />
              <Skeleton className="h-10 w-1/2 mb-2" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          ))}
        </div>
      </main>
    );
  }
  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-background text-foreground pt-2 w-full">
        <div className="text-center text-lg">Please log in to view your meal plan.</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-2 w-full">
      <h1 className="text-3xl font-bold mb-8 mt-8">My Meal Plan</h1>
      <div className="flex items-center justify-between w-full max-w-4xl mb-6">
        <div className="flex items-center gap-2">
          <IngredientMealPlanner user={user} allRecipes={allRecipes} />
        </div>
        <Button variant="ghost" size="icon" onClick={() => setWeekStart(addDays(weekStart, -7))} aria-label="Previous Week">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="text-lg font-semibold">
          {format(weekDates[0], "MMM d")} - {format(weekDates[6], "MMM d, yyyy")}
        </div>
        <Button variant="ghost" size="icon" onClick={() => setWeekStart(addDays(weekStart, 7))} aria-label="Next Week">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      {error ? (
        <div className="text-center text-destructive">
          <div>Failed to load meal plan. Please try again.</div>
          <Button variant="outline" onClick={() => refetch()}>Retry</Button>
        </div>
      ) : loadingMealPlans ? (
        <div className="w-full max-w-4xl space-y-8">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="border-b pb-6 opacity-60">
              <Skeleton className="h-6 w-1/3 mb-2" />
              <Skeleton className="h-10 w-1/2 mb-2" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <div className="w-full max-w-4xl">
              {/* Header row for meal types (hide on mobile) */}
              <div className="hidden sm:grid grid-cols-5 gap-2 mb-2 px-2">
                <div className="font-semibold text-sm text-muted-foreground">Date</div>
                {mealTypes.map((type) => (
                  <div key={type} className="font-semibold text-sm text-muted-foreground capitalize text-center">{type}</div>
                ))}
              </div>
              <div className="space-y-4">
                {weekDates.map((date) => {
                  const dateStr = format(date, "yyyy-MM-dd");
                  const isPast = date < today;
                  const mealsForDate = mealPlans.filter((m) => m.date === dateStr);
                  return (
                    <div key={dateStr} className={`border-b pb-2 px-2`}> 
                      {/* Date label (always visible, styled for mobile/desktop) */}
                      <div className="flex items-center min-h-[32px] gap-2 mb-2">
                        <div className="text-base font-medium sm:min-w-[110px] pr-2">{format(date, "EEE, MMM d")}</div>
                        {isPast && <span className="text-xs bg-muted px-2 py-0.5 rounded w-fit mt-1">Past</span>}
                      </div>
                      {/* Meal slots: grid on desktop, stacked on mobile */}
                      <div className="grid sm:grid-cols-4 grid-cols-1 gap-2">
                        {mealTypes.map((type) => {
                          const meal = mealsForDate.find((m) => m.meal_type === type);
                          const droppableId = `${dateStr}_${type}`;
                          const isOver = overId === droppableId;
                          return (
                            <div key={droppableId} className="flex flex-col">
                              {/* Show meal type label above each slot on mobile only */}
                              <div className="sm:hidden text-xs font-semibold text-muted-foreground capitalize mb-1 ml-1">{type}</div>
                              <DroppableMealSlot dateStr={dateStr} mealType={type} isOver={isOver} isPast={isPast}>
                                {meal ? (
                                  (() => {
                                    const recipe = allRecipes.find((r) => r.id.toString() === meal.recipe_id?.toString());
                                    if (!recipe) return null;
                                    return <DraggableMealCard meal={meal} recipe={recipe} disabled={isPast} handleRemoveMeal={handleRemoveMeal} />;
                                  })()
                                ) : (
                                  <PlaceholderCard mealType={type} onClick={() => {
                                    setPickerSlot({ date: dateStr, mealType: type });
                                    setPickerOpen(true);
                                  }} />
                                )}
                              </DroppableMealSlot>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </DndContext>
          {/* Recipe Picker Sheet */}
          <RecipePickerSheet
            open={pickerOpen}
            onOpenChange={(open) => {
              setPickerOpen(open);
              if (!open) setPickerSlot(null);
            }}
            allRecipes={allRecipes}
            favorites={favorites}
            date={pickerSlot?.date || ""}
            mealType={pickerSlot?.mealType || ""}
            onAdd={(recipe) => {
              if (pickerSlot) handleAddMealPlan(recipe, pickerSlot.date, pickerSlot.mealType);
            }}
          />
        </>
      )}
    </main>
  );
} 