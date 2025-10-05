import { atom } from "jotai";
import { drop, take } from "lodash";
import { canDealRoomAtom } from "./canDealRoom";
import { didJustEscapeAtom } from "./canEscapeRoom";
import { didJustHealAtom } from "./canHeal";
import { deckAtom } from "./deck";
import { roomAtom } from "./room";

export const dealRoomCommand = atom(null, (get, set) => {
  const canDealRoom = get(canDealRoomAtom);
  if (!canDealRoom) {
    throw new Error("A new room cannot be dealt");
  }

  const deck = get(deckAtom);
  const room = get(roomAtom);

  const cardsToDeal = 4 - room.length;

  set(roomAtom, [...room, ...take(deck, cardsToDeal)]);
  set(deckAtom, drop(deck, cardsToDeal));
  set(didJustEscapeAtom, false);
  set(didJustHealAtom, false);
});
