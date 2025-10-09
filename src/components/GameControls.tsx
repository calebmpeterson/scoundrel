import { useAtomValue, useSetAtom } from "jotai";
import {
  canDealRoomAtom,
  canEscapeRoomAtom,
  dealRoomCommand,
  escapeRoomCommand,
  isInDungeonAtom,
} from "../state";
import styles from "./GameControls.module.css";
import { HealthDisplay } from "./HealthDisplay";
import { ProgressDisplay } from "./ProgressDisplay";
import { WeaponDisplay } from "./WeaponDisplay";

export const GameControls = () => {
  const canDealRoom = useAtomValue(canDealRoomAtom);
  const onDealRoom = useSetAtom(dealRoomCommand);

  const canEscapeRoom = useAtomValue(canEscapeRoomAtom);
  const onEscapeRoom = useSetAtom(escapeRoomCommand);

  const isInDungeon = useAtomValue(isInDungeonAtom);

  const dealRoomLabel = isInDungeon ? "Next Room" : "Enter the Dungeon";

  return (
    <div className={styles.controls}>
      {isInDungeon && (
        <div>
          <HealthDisplay />
          <div className={styles.status}>
            <WeaponDisplay />
            <ProgressDisplay />
          </div>
        </div>
      )}

      {isInDungeon ? (
        <div className={styles.actions}>
          <button onClick={onDealRoom} disabled={!canDealRoom}>
            {dealRoomLabel}
          </button>

          <button onClick={onEscapeRoom} disabled={!canEscapeRoom}>
            Run
          </button>
        </div>
      ) : (
        <div>
          <button onClick={onDealRoom} disabled={!canDealRoom}>
            {dealRoomLabel}
          </button>
        </div>
      )}
    </div>
  );
};
