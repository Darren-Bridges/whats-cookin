"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { supabase } from "@/lib/supabaseClient";
import { CUISINES } from "@/constants/cuisines";
import { MOODS } from "@/constants/moods";
import { ALLERGENS } from "@/constants/allergens";

const moods = MOODS;
const allergens = ALLERGENS;
const prices = ["$", "$$", "$$$"];

export default function EditRecipePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    supabase.from("recipes").select("*").eq("id", id).single().then(({ data, error }) => {
      if (error) setError(error.message);
      setRecipe(data);
      setLoading(false);
    });
  }, [id]);

  // Form state
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [mood, setMood] = useState("");
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [time, setTime] = useState("");
  const [steps, setSteps] = useState<string[]>([""]);

  useEffect(() => {
    if (recipe) {
      setName(recipe.name || "");
      setCuisine(recipe.cuisine || "");
      setMood(recipe.mood || "");
      setSelectedAllergens(recipe.allergens || []);
      setPrice(recipe.price || "");
      setIngredients(recipe.ingredients || [""]);
      setTime(recipe.time ? String(recipe.time) : "");
      setSteps(recipe.steps || [""]);
    }
  }, [recipe]);

  const handleAddIngredient = () => setIngredients([...ingredients, ""]);
  const handleRemoveIngredient = (idx: number) => setIngredients(ingredients.filter((_, i) => i !== idx));
  const handleIngredientChange = (idx: number, value: string) => setIngredients(ingredients.map((ing, i) => i === idx ? value : ing));

  const handleAddStep = () => setSteps([...steps, ""]);
  const handleRemoveStep = (idx: number) => setSteps(steps.filter((_, i) => i !== idx));
  const handleStepChange = (idx: number, value: string) => setSteps(steps.map((s, i) => i === idx ? value : s));

  const handleAllergenToggle = (a: string) => setSelectedAllergens(selectedAllergens.includes(a) ? selectedAllergens.filter(x => x !== a) : [...selectedAllergens, a]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
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
    const { error } = await supabase.from("recipes").update(updateData).eq("id", id);
    setSaving(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Recipe updated!");
      router.push(`/recipes/${id}`);
    }
  };

  if (loading) {
    return <main className="flex min-h-screen flex-col items-center justify-center">Loading...</main>;
  }
  if (!recipe) {
    return <main className="flex min-h-screen flex-col items-center justify-center">Recipe not found.</main>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 bg-background text-foreground pt-8 w-full">
      <div className="w-full max-w-lg mx-auto bg-card p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Edit Recipe</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
                  {moods.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label>Price</Label>
              <Select value={price} onValueChange={setPrice}>
                <SelectTrigger><SelectValue placeholder="Select price" /></SelectTrigger>
                <SelectContent>
                  {prices.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label>Allergens</Label>
            <div className="flex flex-wrap gap-2 mt-1">
              {allergens.map(a => (
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
            <Button type="submit" disabled={saving}>{saving ? "Saving..." : "Save Changes"}</Button>
            <Button type="button" variant="ghost" onClick={() => router.push(`/recipes/${id}`)}>Cancel</Button>
            {success && <div className="text-green-600 text-center">{success}</div>}
            {error && <div className="text-destructive text-center">{error}</div>}
          </div>
        </form>
      </div>
    </main>
  );
} 