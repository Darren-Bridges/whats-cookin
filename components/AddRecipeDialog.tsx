"use client";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

export function AddRecipeDialog({ user, onRecipeAdded }: { user: any, onRecipeAdded?: (recipe: any) => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [mood, setMood] = useState("");
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [time, setTime] = useState("");
  const [steps, setSteps] = useState<string[]>([""]);
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
    const recipeData = {
      user_id: user.id,
      name,
      cuisine,
      mood,
      allergens: selectedAllergens,
      price,
      ingredients: ingredients.filter(Boolean),
      time: time ? Number(time) : null,
      steps: steps.filter(Boolean),
    };
    const { data, error } = await supabase.from("recipes").insert(recipeData).select().single();
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Recipe added!");
      if (onRecipeAdded && data) onRecipeAdded(data);
      setTimeout(() => {
        setOpen(false);
        setSuccess("");
        setName("");
        setCuisine("");
        setMood("");
        setSelectedAllergens([]);
        setPrice("");
        setIngredients([""]);
        setTime("");
        setSteps([""]);
      }, 1200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Recipe</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add a New Recipe</DialogTitle>
        </DialogHeader>
        <form id="add-recipe-form" onSubmit={handleSubmit} className="space-y-4">
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
            <Button type="submit" form="add-recipe-form" disabled={loading}>{loading ? "Adding..." : "Add Recipe"}</Button>
            {success && <div className="text-green-600 text-center">{success}</div>}
            {error && <div className="text-destructive text-center">{error}</div>}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 