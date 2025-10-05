import { atom } from "jotai";
import { weaponAtom } from "./weapon";

export const isWeaponEquippedAtom = atom<boolean>((get) => {
  const weapon = get(weaponAtom);
  return Boolean(weapon);
});
