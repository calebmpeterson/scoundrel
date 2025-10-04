import { useAtomValue } from "jotai";
import type { FC } from "react";
import { roomAtom } from "../state";
import { CardDisplay } from "./CardDisplay";
import styles from "./RoomDisplay.module.css";

export const RoomDisplay: FC = () => {
  const room = useAtomValue(roomAtom);

  return (
    <div className={styles.room}>
      {room.map((card) => (
        <CardDisplay
          key={`${card.suite}-${card.face}`}
          isInteractive
          size="large"
          {...card}
        />
      ))}
    </div>
  );
};
