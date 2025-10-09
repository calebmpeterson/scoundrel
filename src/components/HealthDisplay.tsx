import { useAtomValue } from "jotai";
import type { FC } from "react";
import { MAX_HEALTH } from "../constants";
import { healthAtom } from "../state";
import styles from "./HealthDisplay.module.css";

export const HealthDisplay: FC = () => {
  const health = useAtomValue(healthAtom);

  const remaining = "♥".repeat(health);
  const depleted = "♥".repeat(MAX_HEALTH - health);

  return (
    <div className={styles.container}>
      <div className={styles.health}>{remaining}</div>
      <div className={styles.depleted}>{depleted}</div>
    </div>
  );
};
