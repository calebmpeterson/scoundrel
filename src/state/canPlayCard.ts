import { atom } from "jotai";
import { isInLastRoomAtom } from "./isInLastRoom";
import { roomAtom } from "./room";

export const canPlayCardAtom = atom<boolean>((get) => {
  const room = get(roomAtom);

  // If the player is in the last room, then all cards can be played
  if (get(isInLastRoomAtom)) {
    return true;
  }

  return room.length > 1;
});
