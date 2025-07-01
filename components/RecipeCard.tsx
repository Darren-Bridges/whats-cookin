import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, HeartOff, User } from "lucide-react";
import { sampleRecipes } from "@/components/sampleRecipes";
import { AuthDialog, AuthDialogHandle } from "@/components/AuthDialog";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

export function RecipeCard({
  recipe,
  user,
  isFavorite,
  onToggleFavorite,
  mealPlanOpen,
  setMealPlanOpen,
  mealPlanDialog
}: {
  recipe: any;
  user: any;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  mealPlanOpen: boolean;
  setMealPlanOpen: (open: boolean) => void;
  mealPlanDialog: React.ReactNode;
}) {
  const authDialogRef = useRef<AuthDialogHandle>(null);
  const requireAuth = (fn: () => void) => {
    if (user) fn();
    else authDialogRef.current?.open();
  };
  const isUserRecipe = !!recipe.user_id;
  return (
    <Card className="h-full flex flex-col relative">
      {isUserRecipe && (
        <div className="absolute bottom-2 right-2 z-10">
          <Badge variant="secondary" className="flex items-center gap-1 px-2 py-0.5 text-xs">
            <User className="w-3 h-3 mr-1" /> My Recipe
          </Badge>
        </div>
      )}
      <CardContent className="flex-1 flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div className="mt-2 mb-4">
            <h2 className="text-2xl font-semibold mb-1">
              <Link href={`/recipes/${recipe.id}`} className="hover:underline cursor-pointer">
                {recipe.name}
              </Link>
            </h2>
            <div className="text-sm text-muted-foreground mb-2">
              {recipe.cuisine} &bull; {recipe.mood} &bull; {recipe.time} min &bull; {recipe.price}
            </div>
            <div className="text-sm mb-1">Ingredients: {recipe.ingredients.join(", ")}</div>
            {recipe.allergens.length > 0 && (
              <div className="text-xs text-destructive">Allergens: {recipe.allergens.join(", ")}</div>
            )}
          </div>
          <div className="flex flex-col items-end gap-2 mt-4">
            <Button
              variant="default"
              size="icon"
              className="mb-2"
              aria-label="Add to Meal Plan"
              onClick={() => requireAuth(() => setMealPlanOpen(true))}
            >
              🍽️
            </Button>
            {mealPlanDialog}
            <button
              className="ml-2 p-2 rounded-full hover:bg-accent transition"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              onClick={() => requireAuth(onToggleFavorite)}
            >
              {isFavorite ? (
                <Heart className="text-primary fill-primary" />
              ) : (
                <HeartOff className="text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </CardContent>
      <AuthDialog ref={authDialogRef} />
    </Card>
  );
} 