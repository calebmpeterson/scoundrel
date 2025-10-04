import { useAtomValue, useSetAtom } from "jotai";
import {
  canDealRoomAtom,
  canEscapeRoomAtom,
  dealRoomCommand,
  escapeRoomCommand,
} from "../state";
import styles from "./GameControls.module.css";
import { HealthDisplay } from "./HealthDisplay";
import { ScoreDisplay } from "./ScoreDisplay";

export const GameControls = () => {
  const canDealRoom = useAtomValue(canDealRoomAtom);
  const onDealRoom = useSetAtom(dealRoomCommand);

  const canEscapeRoom = useAtomValue(canEscapeRoomAtom);
  const onEscapeRoom = useSetAtom(escapeRoomCommand);

  return (
    <div className={styles.controls}>
      <HealthDisplay />

      <div className={styles.actions}>
        <button onClick={onDealRoom} disabled={!canDealRoom}>
          Deal Room
        </button>

        <button onClick={onEscapeRoom} disabled={!canEscapeRoom}>
          Escape Room
        </button>
      </div>

      <ScoreDisplay />
    </div>
  );
};
