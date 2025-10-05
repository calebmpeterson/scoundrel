import { atom } from "jotai";
import { isEqual } from "lodash";
import { FACE_VALUE_LOOKUP } from "../constants";
import type { Card } from "../types";
import { isHealthCard } from "../utils/isHealthCard";
import { isMonsterCard } from "../utils/isMonsterCard";
import { isWeaponCard } from "../utils/isWeaponCard";
import { chosenCardAtom } from "./chosenCard";
import { healthAtom } from "./health";
import { roomAtom } from "./room";
import { weaponAtom } from "./weapon";

type Options = { attack: "unarmed" | "armed" };

export const playCardCommand = atom(
  null,
  (get, set, played: Card, options?: Options) => {
    const health = get(healthAtom);

    if (isHealthCard(played)) {
      // TODO: prevent player from using two health potions in a single room
      console.log("Heal", played, { health });
      set(healthAtom, Math.min(20, health + FACE_VALUE_LOOKUP[played.face]));
    }

    if (isWeaponCard(played)) {
      console.log("Equip", played);
      set(weaponAtom, played);
    }

    if (isMonsterCard(played)) {
      console.log("Attack", played, options?.attack);

      const equipped = get(weaponAtom);
      // If the player has chosen an armed attack and has a weapon
      // equipped, then the attack is modified by the equipped weapon.
      const attackModifier =
        equipped && options?.attack === "armed"
          ? FACE_VALUE_LOOKUP[equipped.face]
          : 0;

      // Calculate the damage taken and limit to a positive number
      const damageTaken = Math.max(
        0,
        FACE_VALUE_LOOKUP[played.face] - attackModifier
      );

      console.log("Attack", played, options, { attackModifier, damageTaken });

      set(healthAtom, health - damageTaken);

      // If the attack was armed, then
      // the equipped weapon is weakened to
      // the strength of the attacked monster.
      if (
        options?.attack === "armed" &&
        equipped &&
        FACE_VALUE_LOOKUP[equipped.face] > FACE_VALUE_LOOKUP[played.face]
      ) {
        set(weaponAtom, played);
      }
    }

    // Remove the played card from the room
    set(roomAtom, (room) =>
      room.filter((roomCard) => !isEqual(roomCard, played))
    );

    // Clear the chosen card
    set(chosenCardAtom, null);
  }
);
