import { atom } from "jotai";
import { drop, take } from "lodash";
import { didJustEscapeAtom } from "./canEscapeRoom";
import { deckAtom } from "./deck";
import { roomAtom } from "./room";

export const escapeRoomCommand = atom(null, (get, set) => {
  const deck = get(deckAtom);
  const room = get(roomAtom);

  const cardsToDeal = 4;

  set(roomAtom, take(deck, cardsToDeal));
  set(deckAtom, [...drop(deck, cardsToDeal), ...room]);
  set(didJustEscapeAtom, true);
});
