import { useAtomValue } from "jotai";
import type { FC } from "react";
import { weaponDamageAtom } from "../state";
import styles from "./WeaponDisplay.module.css";

export const WeaponDisplay: FC = () => {
  const damage = useAtomValue(weaponDamageAtom);
  const display = "⚔︎".repeat(damage);
  const empty = "⚔︎".repeat(10 - damage);
  return (
    <div className={styles.container}>
      <div className={styles.damage}>{display}</div>
      <div className={styles.empty}>{empty}</div>
    </div>
  );
};
