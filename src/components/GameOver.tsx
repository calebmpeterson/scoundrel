import { atom, useAtomValue, useSetAtom } from "jotai";
import type { FC } from "react";
import {
  isDungeonCompleteAtom,
  isGameOverAtom,
  resetGameCommand,
  scoreAtom,
} from "../state";
import styles from "./GameOver.module.css";

const shouldShowAtom = atom((get) => {
  return get(isDungeonCompleteAtom) || get(isGameOverAtom);
});

const statusAtom = atom((get) => {
  if (get(isDungeonCompleteAtom)) {
    return "👑";
  }

  if (get(isGameOverAtom)) {
    return "☠️";
  }

  return "🛡️";
});

const summaryAtom = atom((get) => {
  if (get(isDungeonCompleteAtom)) {
    return "You Won!";
  }

  if (get(isGameOverAtom)) {
    return "You Died";
  }

  return "🛡️";
});

export const GameOver: FC = () => {
  const score = useAtomValue(scoreAtom);
  const status = useAtomValue(statusAtom);
  const summary = useAtomValue(summaryAtom);
  const shouldShow = useAtomValue(shouldShowAtom);

  const onPlayAgain = useSetAtom(resetGameCommand);

  if (!shouldShow) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.summary}>{summary}</div>
        <div className={styles.status}>{status}</div>
        <div className={styles.score}>Score: {score}</div>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
};
