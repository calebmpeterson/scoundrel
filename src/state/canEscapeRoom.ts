import { atom } from "jotai";
import { roomAtom } from "./room";

export const didJustEscapeAtom = atom<boolean>(false);

export const canEscapeRoomAtom = atom<boolean>((get) => {
  const didJustEscape = get(didJustEscapeAtom);
  const room = get(roomAtom);

  return !didJustEscape && room.length === 4;
});
