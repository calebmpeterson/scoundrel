import { useAtomValue } from "jotai";
import { deckAtom } from "../state";
import { CardDisplay } from "./CardDisplay";
import styles from "./DungeonDisplay.module.css";

export function DungeonDisplay() {
  const deck = useAtomValue(deckAtom);

  return (
    <div className={styles.layout}>
      {deck.map((card) => (
        <CardDisplay key={`${card.suite}-${card.face}`} {...card} />
      ))}
    </div>
  );
}
