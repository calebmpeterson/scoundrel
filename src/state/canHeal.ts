import { atom } from "jotai";

export const didJustHealAtom = atom<boolean>(false);

export const canHealAtom = atom<boolean>((get) => {
  const didJustHeal = get(didJustHealAtom);

  return !didJustHeal;
});
