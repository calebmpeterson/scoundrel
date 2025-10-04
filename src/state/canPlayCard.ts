import { atom } from "jotai";
import { roomAtom } from "./room";

export const canPlayCardAtom = atom<boolean>((get) => {
  const room = get(roomAtom);

  return room.length > 1;
});
