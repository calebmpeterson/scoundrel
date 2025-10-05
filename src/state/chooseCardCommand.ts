import { atom } from "jotai";
import type { Card } from "../types";
import { chosenCardAtom } from "./chosenCard";

export const chooseCardCommand = atom(null, (_get, set, chosen: Card) => {
  set(chosenCardAtom, chosen);
});
