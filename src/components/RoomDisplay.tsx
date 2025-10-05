import { useAtomValue, useSetAtom } from "jotai";
import type { FC } from "react";
import { canPlayCardAtom, chooseCardCommand, roomAtom } from "../state";
import { CardDisplay } from "./CardDisplay";
import styles from "./RoomDisplay.module.css";

export const RoomDisplay: FC = () => {
  const room = useAtomValue(roomAtom);

  const canChooseCard = useAtomValue(canPlayCardAtom);
  const onChooseCard = useSetAtom(chooseCardCommand);

  return (
    <div className={styles.room}>
      {room.map((card) => (
        <CardDisplay
          key={`${card.suite}-${card.face}`}
          isInteractive={canChooseCard}
          onInteract={onChooseCard}
          size="large"
          {...card}
        />
      ))}
    </div>
  );
};
