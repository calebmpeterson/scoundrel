import { atom } from "jotai";
import { isEqual } from "lodash";
import { FACE_VALUE_LOOKUP } from "../constants";
import type { Card } from "../types";
import { healthAtom } from "./health";
import { roomAtom } from "./room";
import { weaponAtom } from "./weapon";

export const playCardCommand = atom(null, (get, set, played: Card) => {
  const health = get(healthAtom);

  if (played.suite === "hearts") {
    console.log("Heal", played, { health });
    set(healthAtom, Math.min(20, health + FACE_VALUE_LOOKUP[played.face]));
  }

  if (played.suite === "diamonds") {
    console.log("Equip", played);
    set(weaponAtom, played);
  }

  if (played.suite === "clubs" || played.suite === "spades") {
    console.log("Attack", played);
  }

  // Remove the played card from the room
  set(roomAtom, (room) =>
    room.filter((roomCard) => !isEqual(roomCard, played))
  );
});
