export const MASS_UNITS = ["mg", "g", "kg"] as const;
export const VOLUME_UNITS = ["ml", "l", "tsp", "tbsp", "cups", "pints"] as const;
export const COUNT_UNITS = ["pieces", "units", "eggs", "cloves"] as const;
export const LENGTH_UNITS = ["cm", "inch", "slices"] as const;

export const ALL_UNITS = [...MASS_UNITS, ...VOLUME_UNITS, ...COUNT_UNITS, ...LENGTH_UNITS] as const;

export type MassUnit = typeof MASS_UNITS[number];
export type VolumeUnit = typeof VOLUME_UNITS[number];
export type CountUnit = typeof COUNT_UNITS[number];
export type LengthUnit = typeof LENGTH_UNITS[number];
export type Unit = typeof ALL_UNITS[number];

export interface IngredientQuantity {
  amount: number;
  unit: Unit;
  ingredient: string;
}

export interface Ingredient {
  name: string;
  quantity?: IngredientQuantity;
} 