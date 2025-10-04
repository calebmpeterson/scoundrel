import { useAtomValue } from "jotai";
import type { FC } from "react";
import { scoreAtom } from "../state";
import styles from "./ScoreDisplay.module.css";

export const ScoreDisplay: FC = () => {
  const score = useAtomValue(scoreAtom);
  return <div className={styles.score}>Score: {score}</div>;
};
