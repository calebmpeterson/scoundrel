import { useAtomValue, useSetAtom } from "jotai";
import type { FC } from "react";
import {
  canHealAtom,
  chosenCardAtom,
  isWeaponEquippedAtom,
  playCardCommand,
} from "../state";
import { isHealthCard } from "../utils/isHealthCard";
import { isMonsterCard } from "../utils/isMonsterCard";
import { isWeaponCard } from "../utils/isWeaponCard";
import { CardDisplay } from "./CardDisplay";
import styles from "./PlayCardOptions.module.css";

export const PlayCardOptions: FC = () => {
  const chosen = useAtomValue(chosenCardAtom);
  const onPlayCard = useSetAtom(playCardCommand);

  const setChosenCard = useSetAtom(chosenCardAtom);
  const onCancel = () => {
    setChosenCard(null);
  };

  const isWeaponEquipped = useAtomValue(isWeaponEquippedAtom);
  const canHeal = useAtomValue(canHealAtom);

  const healLabel = canHeal ? "Heal" : "Discard";

  if (!chosen) {
    return null;
  }

  return (
    <div className={styles.container} onClick={onCancel}>
      <div className={styles.layout}>
        <CardDisplay size="x-large" {...chosen} />

        {isMonsterCard(chosen) && (
          <>
            <button onClick={() => onPlayCard(chosen, { attack: "unarmed" })}>
              Attack unarmed
            </button>

            {isWeaponEquipped && (
              <button onClick={() => onPlayCard(chosen, { attack: "armed" })}>
                Attack with weapon
              </button>
            )}
          </>
        )}

        {isHealthCard(chosen) && (
          <>
            <button onClick={() => onPlayCard(chosen)}>{healLabel}</button>
          </>
        )}

        {isWeaponCard(chosen) && (
          <>
            <button onClick={() => onPlayCard(chosen)}>Equip</button>
          </>
        )}
      </div>
    </div>
  );
};
