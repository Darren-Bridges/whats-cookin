"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleRecipes } from "@/components/sampleRecipes";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Heart, HeartOff, Pencil } from "lucide-react";
import { format } from "date-fns";
import { AddToMealPlanDialog } from "@/components/AddToMealPlanDialog";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { AuthDialog, AuthDialogHandle } from "@/components/AuthDialog";
import { Label } from "@/components/ui/label";
import { CUISINES } from "@/constants/cuisines";
import { MOODS } from "@/constants/moods";

export default function RecipeDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const queryClient = useQueryClient();

  const [user, setUser] = useState<any>(null);
  const [mealPlanOpen, setMealPlanOpen] = useState(false);
  const [mealDate, setMealDate] = useState<string>("");
  const [mealType, setMealType] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const mealTypes = ["breakfast", "lunch", "dinner", "snack"];

  const authDialogRef = useRef<AuthDialogHandle>(null);
  const requireAuth = (fn: () => void) => {
    if (user) fn();
    else authDialogRef.current?.open();
  };

  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
  }, []);

  const { data: recipe, isLoading: loadingRecipe } = useQuery({
    queryKey: ["recipe", id],
    queryFn: async () => {
      const sample = sampleRecipes.find((r) => r.id === id);
      if (sample) return sample;
      // Try to fetch from Supabase
      const { data } = await supabase.from("recipes").select("*").eq("id", id).single();
      return data || null;
    },
  });

  const { data: isFavorite = false, isLoading: loadingFavorite } = useQuery({
    queryKey: ["favorite", user?.id, id],
    queryFn: async () => {
      if (!user) return false;
      const { data } = await supabase
        .from("favorites")
        .select("recipe_id")
        .eq("user_id", user.id)
        .eq("recipe_id", id);
      return !!data && data.length > 0;
    },
    enabled: !!user,
  });

  const toggleFavorite = useMutation({
    mutationFn: async () => {
      if (!user) return;
      if (isFavorite) {
        await supabase
          .from("favorites")
          .delete()
          .eq("user_id", user.id)
          .eq("recipe_id", id);
        return false;
      } else {
        await supabase
          .from("favorites")
          .insert({ user_id: user.id, recipe_id: id });
        return true;
      }
    },
    onSuccess: (newFavorite) => {
      queryClient.setQueryData(["favorite", user?.id, id], newFavorite);
    },
  });

  const handleToggleFavorite = () => {
    toggleFavorite.mutate();
  };

  const handleAddToMealPlan = async () => {
    if (!user || !mealDate || !mealType) return;
    setLoading(true);
    await supabase.from("meal_plans").insert({
      user_id: user.id,
      recipe_id: id,
      date: mealDate,
      meal_type: mealType,
    });
    setLoading(false);
    setSuccess("Added to meal plan!");
    setTimeout(() => {
      setMealPlanOpen(false);
      setSuccess("");
    }, 1000);
  };

  const isUserRecipe = recipe && user && recipe.user_id === user.id;

  if (loadingRecipe) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 bg-background text-foreground">
        <Card className="max-w-xl w-full p-8 rounded-xl shadow space-y-6">
          <CardContent className="p-0 space-y-6">
            <Skeleton className="h-8 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-1/3 mb-1" />
          </CardContent>
        </Card>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 bg-background text-foreground">
        <div className="text-center">Recipe not found.</div>
        <Link href="/" className="mt-4 text-primary underline">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 bg-background text-foreground">
      <Card className="max-w-xl w-full p-8 rounded-xl shadow space-y-6">
        <CardContent className="p-0 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold">{recipe.name}</h1>
            <div className="flex gap-2">
              {isUserRecipe && (
                <Link href={`/recipes/${id}/edit`}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 p-2 rounded-full hover:bg-accent transition"
                    aria-label="Edit recipe"
                  >
                    <Pencil className="w-5 h-5" />
                  </Button>
                </Link>
              )}
              <button
                className="ml-2 p-2 rounded-full hover:bg-accent transition"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                onClick={() => requireAuth(handleToggleFavorite)}
                disabled={toggleFavorite.isPending || loadingFavorite}
              >
                {isFavorite ? (
                  <Heart className="text-primary fill-primary" />
                ) : (
                  <HeartOff className="text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="secondary">{recipe.cuisine}</Badge>
            <Badge variant="outline">{recipe.mood}</Badge>
            <Badge variant="default">{recipe.time} min</Badge>
            <Badge variant="default">{recipe.price}</Badge>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Ingredients:</span> {recipe.ingredients.join(", ")}
          </div>
          {recipe.allergens.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {recipe.allergens.map((a: string) => (
                <Badge key={a} variant="destructive">{a}</Badge>
              ))}
            </div>
          )}
          <div className="mb-4">
            <span className="font-semibold">Cooking Steps:</span>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              {recipe.steps.map((step: string, idx: number) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
          <Button variant="default" onClick={() => requireAuth(() => setMealPlanOpen(true))}>
            Add to Meal Plan
          </Button>
          <AddToMealPlanDialog
            recipeId={recipe.id}
            open={mealPlanOpen}
            setOpen={setMealPlanOpen}
          />
          <Button variant="outline" onClick={() => router.back()}>
            Back
          </Button>
        </CardContent>
      </Card>
      <AuthDialog ref={authDialogRef} />
      {isUserRecipe && (
        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Recipe</DialogTitle>
            </DialogHeader>
            <EditRecipeForm recipe={recipe} onClose={() => setEditOpen(false)} onUpdated={(updated) => {
              queryClient.setQueryData(["recipe", id], updated);
              setEditOpen(false);
            }} />
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}

function EditRecipeForm({ recipe, onClose, onUpdated }: { recipe: any, onClose: () => void, onUpdated: (r: any) => void }) {
  const [name, setName] = useState(recipe.name || "");
  const [cuisine, setCuisine] = useState(recipe.cuisine || "");
  const [mood, setMood] = useState(recipe.mood || "");
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>(recipe.allergens || []);
  const [price, setPrice] = useState(recipe.price || "");
  const [ingredients, setIngredients] = useState<string[]>(recipe.ingredients || [""]);
  const [time, setTime] = useState(recipe.time ? String(recipe.time) : "");
  const [steps, setSteps] = useState<string[]>(recipe.steps || [""]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleAddIngredient = () => setIngredients([...ingredients, ""]);
  const handleRemoveIngredient = (idx: number) => setIngredients(ingredients.filter((_, i) => i !== idx));
  const handleIngredientChange = (idx: number, value: string) => setIngredients(ingredients.map((ing, i) => i === idx ? value : ing));

  const handleAddStep = () => setSteps([...steps, ""]);
  const handleRemoveStep = (idx: number) => setSteps(steps.filter((_, i) => i !== idx));
  const handleStepChange = (idx: number, value: string) => setSteps(steps.map((s, i) => i === idx ? value : s));

  const handleAllergenToggle = (a: string) => setSelectedAllergens(selectedAllergens.includes(a) ? selectedAllergens.filter(x => x !== a) : [...selectedAllergens, a]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const updateData = {
      name,
      cuisine,
      mood,
      allergens: selectedAllergens,
      price,
      ingredients: ingredients.filter(Boolean),
      time: time ? Number(time) : null,
      steps: steps.filter(Boolean),
    };
    const { data, error } = await supabase.from("recipes").update(updateData).eq("id", recipe.id).select().single();
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Recipe updated!");
      onUpdated(data);
    }
  };

  return (
    <form id="edit-recipe-form" onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <Label>Cuisine</Label>
          <Select value={cuisine} onValueChange={setCuisine}>
            <SelectTrigger><SelectValue placeholder="Select cuisine" /></SelectTrigger>
            <SelectContent>
              {CUISINES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label>Mood</Label>
          <Select value={mood} onValueChange={setMood}>
            <SelectTrigger><SelectValue placeholder="Select mood" /></SelectTrigger>
            <SelectContent>
              {MOODS.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label>Price</Label>
          <Select value={price} onValueChange={setPrice}>
            <SelectTrigger><SelectValue placeholder="Select price" /></SelectTrigger>
            <SelectContent>
              {["$", "$$", "$$$"] .map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Allergens</Label>
        <div className="flex flex-wrap gap-2 mt-1">
          {["peanuts", "gluten", "dairy", "eggs", "soy"].map(a => (
            <Button key={a} type="button" variant={selectedAllergens.includes(a) ? "default" : "outline"} size="sm" onClick={() => handleAllergenToggle(a)}>
              {a}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <Label>Ingredients</Label>
        {ingredients.map((ing, idx) => (
          <div key={idx} className="flex gap-2 mb-1">
            <Input value={ing} onChange={e => handleIngredientChange(idx, e.target.value)} required className="flex-1" />
            {ingredients.length > 1 && <Button type="button" variant="outline" size="icon" onClick={() => handleRemoveIngredient(idx)}>-</Button>}
            {idx === ingredients.length - 1 && <Button type="button" variant="outline" size="icon" onClick={handleAddIngredient}>+</Button>}
          </div>
        ))}
      </div>
      <div>
        <Label>Time (minutes)</Label>
        <Input type="number" min={1} value={time} onChange={e => setTime(e.target.value)} required />
      </div>
      <div>
        <Label>Steps</Label>
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-2 mb-1">
            <Input value={step} onChange={e => handleStepChange(idx, e.target.value)} required className="flex-1" />
            {steps.length > 1 && <Button type="button" variant="outline" size="icon" onClick={() => handleRemoveStep(idx)}>-</Button>}
            {idx === steps.length - 1 && <Button type="button" variant="outline" size="icon" onClick={handleAddStep}>+</Button>}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <Button type="submit" form="edit-recipe-form" disabled={loading}>{loading ? "Saving..." : "Save Changes"}</Button>
        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
        {success && <div className="text-green-600 text-center">{success}</div>}
        {error && <div className="text-destructive text-center">{error}</div>}
      </div>
    </form>
  );
} 