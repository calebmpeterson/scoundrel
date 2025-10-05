import { atom } from "jotai";
import type { Card } from "../types";

export const chosenCardAtom = atom<Card | null>(null);
