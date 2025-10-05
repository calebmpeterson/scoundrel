import { atom } from "jotai";
import { deckAtom } from "./deck";

export const isInDungeonAtom = atom<boolean>((get) => {
  const deck = get(deckAtom);

  return deck.length < 44;
});
