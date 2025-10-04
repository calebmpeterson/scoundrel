import { atom } from "jotai";
import { sum } from "lodash";
import { FACE_VALUE_LOOKUP } from "../constants";
import { isHealthCard } from "../utils/isHealthCard";
import { isMonsterCard } from "../utils/isMonsterCard";
import { deckAtom } from "./deck";
import { healthAtom } from "./health";
import { isDungeonCompleteAtom } from "./isDungeonComplete";
import { roomAtom } from "./room";

export const scoreAtom = atom<number>((get) => {
  const deck = get(deckAtom);
  const room = get(roomAtom);

  const cardsToScore = [...room, ...deck];

  // If the dungeon is complete...
  if (get(isDungeonCompleteAtom)) {
    // Final score is remaining health + remaining health potions
    return (
      get(healthAtom) +
      sum(
        cardsToScore
          .filter(isHealthCard)
          .map((card) => FACE_VALUE_LOOKUP[card.face])
      )
    );
  }

  // Otherwise final score is undefeated monsters
  return sum(
    cardsToScore
      // Only monsters are scored
      .filter(isMonsterCard)
      // Negate the face value when scoring
      .map((card) => -FACE_VALUE_LOOKUP[card.face])
  );
});
