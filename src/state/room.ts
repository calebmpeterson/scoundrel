import { atom } from "jotai";
import type { Card } from "../types";

export const roomAtom = atom<Card[]>([]);
