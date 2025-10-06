import { useAtomValue } from "jotai";
import type { FC } from "react";
import { weaponDamageAtom } from "../state";
import styles from "./WeaponDisplay.module.css";

export const WeaponDisplay: FC = () => {
  const damage = useAtomValue(weaponDamageAtom);
  return <div className={styles.damage}>Attack {damage}</div>;
};
