import { useAtomValue } from "jotai";
import type { FC } from "react";
import { healthAtom } from "../state";
import styles from "./HealthDisplay.module.css";

export const HealthDisplay: FC = () => {
  const health = useAtomValue(healthAtom);
  return <div className={styles.health}>Health: {health}</div>;
};
