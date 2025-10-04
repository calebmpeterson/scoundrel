import styles from "./App.module.css";
import { DungeonDisplay } from "./components/DungeonDisplay";
import { GameControls } from "./components/GameControls";
import { RoomDisplay } from "./components/RoomDisplay";

function App() {
  return (
    <div className={styles.layout}>
      <DungeonDisplay />

      <RoomDisplay />

      <GameControls />
    </div>
  );
}

export default App;
