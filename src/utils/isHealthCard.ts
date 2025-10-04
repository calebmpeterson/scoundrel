import type { Card } from "../types";

export const isHealthCard = (card: Card) => card.suite === "hearts";
