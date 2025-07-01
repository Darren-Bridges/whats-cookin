"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ALL_UNITS, type Ingredient } from "@/constants/units";

interface IngredientInputProps {
  ingredient: Ingredient;
  onChange: (ingredient: Ingredient) => void;
  onRemove: () => void;
  showAddButton?: boolean;
  onAdd?: () => void;
}

export function IngredientInput({ 
  ingredient, 
  onChange, 
  onRemove, 
  showAddButton = false, 
  onAdd 
}: IngredientInputProps) {
  const handleNameChange = (name: string) => {
    onChange({
      ...ingredient,
      name,
      quantity: ingredient.quantity ? {
        ...ingredient.quantity,
        ingredient: name
      } : undefined
    });
  };

  const handleAmountChange = (amount: string) => {
    const numAmount = parseFloat(amount) || 0;
    onChange({
      ...ingredient,
      quantity: {
        amount: numAmount,
        unit: ingredient.quantity?.unit || "g",
        ingredient: ingredient.name
      }
    });
  };

  const handleUnitChange = (unit: string) => {
    onChange({
      ...ingredient,
      quantity: {
        amount: ingredient.quantity?.amount || 0,
        unit: unit as any,
        ingredient: ingredient.name
      }
    });
  };

  return (
    <div className="flex gap-2 mb-1">
      <Input
        value={ingredient.name}
        onChange={(e) => handleNameChange(e.target.value)}
        placeholder="Ingredient name"
        required
        className="flex-1"
      />
      <Input
        type="number"
        min="0"
        step="0.1"
        value={ingredient.quantity?.amount || ""}
        onChange={(e) => handleAmountChange(e.target.value)}
        placeholder="Amount"
        className="w-20"
      />
      <Select
        value={ingredient.quantity?.unit || "g"}
        onValueChange={handleUnitChange}
      >
        <SelectTrigger className="w-24">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ALL_UNITS.map(unit => (
            <SelectItem key={unit} value={unit}>
              {unit}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="button" variant="outline" size="icon" onClick={onRemove}>
        -
      </Button>
      {showAddButton && onAdd && (
        <Button type="button" variant="outline" size="icon" onClick={onAdd}>
          +
        </Button>
      )}
    </div>
  );
} 