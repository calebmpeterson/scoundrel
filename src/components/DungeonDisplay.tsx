import { useAtom, useAtomValue } from "jotai";
import { deckAtom, isDungeonVisibleAtom } from "../state";
import { CardDisplay } from "./CardDisplay";
import styles from "./DungeonDisplay.module.css";

export function DungeonDisplay() {
  const deck = useAtomValue(deckAtom);
  const [isDungeonVisible, setIsDungeonVisible] = useAtom(isDungeonVisibleAtom);

  const onToggleDungeonVisibility = () => {
    setIsDungeonVisible((isVisible) => !isVisible);
  };

  const toggleLabel = isDungeonVisible ? "Hide Dungeon" : "Show Dungeon";

  if (import.meta.env.MODE !== "development") {
    return <div />;
  }

  return (
    <div className={styles.container}>
      {isDungeonVisible && (
        <div className={styles.layout}>
          {deck.map((card) => (
            <CardDisplay key={`${card.suite}-${card.face}`} {...card} />
          ))}
        </div>
      )}
      <button onClick={onToggleDungeonVisibility}>{toggleLabel}</button>
    </div>
  );
}
