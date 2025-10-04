import { atom } from "jotai";
import { shuffle } from "lodash";
import type { Card } from "../types";
import { createDeck } from "../utils/createDeck";
import { pruneDeck } from "../utils/pruneDeck";

export const deckAtom = atom<Card[]>(
  shuffle(
    pruneDeck(
      createDeck(),
      (card) =>
        ["jack", "queen", "king", "ace"].includes(card.face) &&
        ["hearts", "diamonds"].includes(card.suite)
    )
  )
);
