import { useAtomValue } from "jotai";
import styles from "./App.module.css";
import { DungeonDisplay } from "./components/DungeonDisplay";
import { GameControls } from "./components/GameControls";
import { GameOver } from "./components/GameOver";
import { Introduction } from "./components/Introduction";
import { PlayCardOptions } from "./components/PlayCardOptions";
import { RoomDisplay } from "./components/RoomDisplay";
import { isInDungeonAtom } from "./state";

function App() {
  const isInDungeon = useAtomValue(isInDungeonAtom);

  return (
    <div className={styles.layout}>
      <DungeonDisplay />

      {isInDungeon ? <RoomDisplay /> : <Introduction />}

      <PlayCardOptions />

      <GameControls />

      <GameOver />
    </div>
  );
}

export default App;
