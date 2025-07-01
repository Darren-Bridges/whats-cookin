"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { parseDate } from "chrono-node";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface AddToMealPlanDialogProps {
  recipeId: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSuccess?: () => void;
}

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function AddToMealPlanDialog({ recipeId, open, setOpen, onSuccess }: AddToMealPlanDialogProps) {
  const [dateInput, setDateInput] = useState("");
  const [mealDate, setMealDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [mealType, setMealType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const mealTypes = ["breakfast", "lunch", "dinner", "snack"];

  // Sync input and calendar
  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(e.target.value);
    const parsed = parseDate(e.target.value, new Date(), { forwardDate: true });
    if (parsed) {
      setMealDate(parsed);
      setMonth(parsed);
    }
  };

  const handleCalendarSelect = (date?: Date) => {
    setMealDate(date);
    setMonth(date);
    setDateInput(date ? formatDate(date) : "");
    setCalendarOpen(false);
  };

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
      setDateInput("");
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
            <div className="relative flex gap-2">
              <Input
                id="date"
                value={dateInput}
                placeholder="Tomorrow or next week"
                className="bg-background pr-10"
                onChange={handleDateInputChange}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setCalendarOpen(true);
                  }
                }}
              />
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="date-picker"
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={mealDate}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={handleCalendarSelect}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="text-muted-foreground px-1 text-sm mt-1">
              Your meal will be planned for {mealDate ? <span className="font-medium">{formatDate(mealDate)}</span> : <span className="italic">no date selected</span>}.
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