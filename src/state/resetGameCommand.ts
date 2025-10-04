import { atom } from "jotai";
import { shuffle } from "lodash";
import { createDeck } from "../utils/createDeck";
import { pruneDeck } from "../utils/pruneDeck";
import { deckAtom } from "./deck";
import { healthAtom } from "./health";

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

  // Reset the health
  set(healthAtom, 20);
});
