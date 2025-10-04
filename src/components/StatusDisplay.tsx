import { atom, useAtomValue } from "jotai";
import type { FC } from "react";
import { isDungeonCompleteAtom, isGameOverAtom } from "../state";
import styles from "./ScoreDisplay.module.css";

const statusAtom = atom((get) => {
  if (get(isDungeonCompleteAtom)) {
    return "👑";
  }

  if (get(isGameOverAtom)) {
    return "☠️";
  }

  return "🛡️";
});

export const StatusDisplay: FC = () => {
  const status = useAtomValue(statusAtom);
  return <div className={styles.status}>Status: {status}</div>;
};
