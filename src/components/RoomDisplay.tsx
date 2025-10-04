import { useAtomValue, useSetAtom } from "jotai";
import type { FC } from "react";
import { roomAtom } from "../state";
import { canPlayCardAtom } from "../state/canPlayCard";
import { playCardCommand } from "../state/playCardCommand";
import { CardDisplay } from "./CardDisplay";
import styles from "./RoomDisplay.module.css";

export const RoomDisplay: FC = () => {
  const room = useAtomValue(roomAtom);

  const canPlayCard = useAtomValue(canPlayCardAtom);
  const onPlayCard = useSetAtom(playCardCommand);

  return (
    <div className={styles.room}>
      {room.map((card) => (
        <CardDisplay
          key={`${card.suite}-${card.face}`}
          isInteractive={canPlayCard}
          onInteract={onPlayCard}
          size="large"
          {...card}
        />
      ))}
    </div>
  );
};
