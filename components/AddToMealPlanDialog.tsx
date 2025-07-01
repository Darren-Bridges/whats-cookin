"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface AddToMealPlanDialogProps {
  recipeId: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSuccess?: () => void;
}

export function AddToMealPlanDialog({ recipeId, open, setOpen, onSuccess }: AddToMealPlanDialogProps) {
  const [mealDate, setMealDate] = useState<Date | undefined>(undefined);
  const [mealType, setMealType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const mealTypes = ["breakfast", "lunch", "dinner", "snack"];

  const handleAddToMealPlan = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !mealDate || !mealType) return;
    setLoading(true);
    await supabase.from("meal_plans").insert({
      user_id: user.id,
      recipe_id: recipeId,
      date: format(mealDate, "yyyy-MM-dd"),
      meal_type: mealType,
    });
    setLoading(false);
    setSuccess("Added to meal plan!");
    if (onSuccess) onSuccess();
    setTimeout(() => {
      setOpen(false);
      setSuccess("");
      setMealDate(undefined);
      setMealType("");
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xs sm:max-w-md w-full">
        <DialogHeader>
          <DialogTitle>Add to Meal Plan</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <div className="rounded-md border overflow-x-auto">
              <Calendar mode="single" selected={mealDate} onSelect={setMealDate} className="w-full min-w-[250px]" />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Meal Type</label>
            <Select value={mealType} onValueChange={setMealType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select meal type" />
              </SelectTrigger>
              <SelectContent>
                {mealTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleAddToMealPlan}
            disabled={!mealDate || !mealType || loading}
            className="w-full mt-2"
          >
            {loading ? "Adding..." : "Add to Meal Plan"}
          </Button>
          {success && <div className="text-green-600 text-center mt-2">{success}</div>}
        </div>
      </DialogContent>
    </Dialog>
  );
} 