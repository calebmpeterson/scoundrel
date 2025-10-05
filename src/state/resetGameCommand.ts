import { atom } from "jotai";
import { shuffle } from "lodash";
import { createDeck } from "../utils/createDeck";
import { pruneDeck } from "../utils/pruneDeck";
import { didJustEscapeAtom } from "./canEscapeRoom";
import { didJustHealAtom } from "./canHeal";
import { deckAtom } from "./deck";
import { healthAtom } from "./health";
import { roomAtom } from "./room";
import { weaponAtom } from "./weapon";

export const resetGameCommand = atom(null, (_get, set) => {
  // Reset the deck
  set(
    deckAtom,
    shuffle(
      pruneDeck(
        createDeck(),
        (card) =>
          ["jack", "queen", "king", "ace"].includes(card.face) &&
          ["hearts", "diamonds"].includes(card.suite)
      )
    )
  );

  // Not in a room
  set(roomAtom, []);

  // Reset the health
  set(healthAtom, 20);

  // No weapon equipped
  set(weaponAtom, null);

  // Reset other states
  set(didJustEscapeAtom, false);
  set(didJustHealAtom, false);
});
