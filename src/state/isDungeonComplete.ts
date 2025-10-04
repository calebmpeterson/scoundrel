import { atom } from "jotai";
import { isMonsterCard } from "../utils/isMonsterCard";
import { deckAtom } from "./deck";
import { roomAtom } from "./room";

export const isDungeonCompleteAtom = atom<boolean>((get) => {
  const deck = get(deckAtom);
  const room = get(roomAtom);

  const cardsRemaining = [...room, ...deck];

  return cardsRemaining.every((card) => !isMonsterCard(card));
});
