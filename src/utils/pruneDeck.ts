import type { Card } from "../types";

export const pruneDeck = (deck: Card[], removeIf: (card: Card) => boolean) =>
  deck.filter((card) => !removeIf(card));
