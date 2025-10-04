import type { Card } from "../types";

export const isMonsterCard = (card: Card) =>
  ["spades", "clubs"].includes(card.suite);
