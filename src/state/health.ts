import { atom } from "jotai";
import { MAX_HEALTH } from "../constants";

export const healthAtom = atom<number>(MAX_HEALTH);
