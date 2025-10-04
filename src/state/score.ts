import { atom } from "jotai";
import { sum } from "lodash";
import { FACE_VALUE_LOOKUP } from "../constants";
import { deckAtom } from "./deck";
import { roomAtom } from "./room";

export const scoreAtom = atom<number>((get) => {
  const deck = get(deckAtom);
  const room = get(roomAtom);

  const cardsToScore = [...room, ...deck];

  return sum(
    cardsToScore
      // Only monsters are scored
      .filter((card) => ["spades", "clubs"].includes(card.suite))
      // Negate the face value when scoring
      .map((card) => -FACE_VALUE_LOOKUP[card.face])
  );
});
