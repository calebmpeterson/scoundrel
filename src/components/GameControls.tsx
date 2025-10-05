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
import { StatusDisplay } from "./StatusDisplay";
import { WeaponDisplay } from "./WeaponDisplay";

export const GameControls = () => {
  const canDealRoom = useAtomValue(canDealRoomAtom);
  const onDealRoom = useSetAtom(dealRoomCommand);

  const canEscapeRoom = useAtomValue(canEscapeRoomAtom);
  const onEscapeRoom = useSetAtom(escapeRoomCommand);

  return (
    <div className={styles.controls}>
      <div>
        <HealthDisplay />
        <WeaponDisplay />
      </div>

      <div className={styles.actions}>
        <button onClick={onDealRoom} disabled={!canDealRoom}>
          Next Room
        </button>

        <button onClick={onEscapeRoom} disabled={!canEscapeRoom}>
          Run
        </button>
      </div>

      <div>
        <StatusDisplay />
        <ScoreDisplay />
      </div>
    </div>
  );
};
