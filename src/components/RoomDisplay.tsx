import { useAtomValue, useSetAtom } from "jotai";
import { range } from "lodash";
import type { FC } from "react";
import { canPlayCardAtom, chooseCardCommand, roomAtom } from "../state";
import { BlankCard, CardDisplay } from "./CardDisplay";
import styles from "./RoomDisplay.module.css";

export const RoomDisplay: FC = () => {
  const room = useAtomValue(roomAtom);

  const canChooseCard = useAtomValue(canPlayCardAtom);
  const onChooseCard = useSetAtom(chooseCardCommand);

  const blankCardsToShow = 4 - room.length;

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

      {range(0, blankCardsToShow).map((index) => (
        <BlankCard key={`blank-${index}`} size="large" />
      ))}
    </div>
  );
};
