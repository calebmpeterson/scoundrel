import type { Card } from "../types";

export const isWeaponCard = (card: Card) => card.suite === "diamonds";
