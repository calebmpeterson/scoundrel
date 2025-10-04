import { atom } from "jotai";
import { roomAtom } from "./room";

export const canDealRoomAtom = atom<boolean>((get) => {
  const room = get(roomAtom);

  // A new room can only be dealt when:
  //
  // 1 card is left - the player has activated the other 3
  // 0 cards are left - the player has started a new game
  return room.length === 1 || room.length === 0;
});
