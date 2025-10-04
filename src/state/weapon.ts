import { atom } from "jotai";
import { FACE_VALUE_LOOKUP } from "../constants";
import type { Card } from "../types";

export const weaponAtom = atom<Card | null>(null);

export const weaponDamageAtom = atom<number>((get) => {
  const weapon = get(weaponAtom);

  return weapon ? FACE_VALUE_LOOKUP[weapon.face] : 0;
});
