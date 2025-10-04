import { atom } from "jotai";
import { healthAtom } from "./health";

export const isGameOverAtom = atom<boolean>((get) => {
  const health = get(healthAtom);
  return health <= 0;
});
