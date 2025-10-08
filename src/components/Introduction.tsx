import type { CSSProperties, FC } from "react";
import styles from "./Introduction.module.css";

const COLOR = "--color";

export const Introduction: FC = () => (
  <div className={styles.container}>
    <div style={{ textAlign: "center", fontWeight: 600 }}>
      A solo rogue-like card game
    </div>
    <h1 style={{ textAlign: "center", margin: "0" }}>Scoundrel Solitaire</h1>

    <div>
      In Scoundrel each room is made up of four cards representing monsters,
      weapons, and healing items. You must choose three cards to resolve in any
      order and carry the last card to the next room.
    </div>

    <div>
      Spades and clubs are monsters that deal damage. Diamonds are weapons that
      help you fight stronger monsters. Hearts heal your health.
    </div>

    <div>You can run from a room once, but not twice in a row.</div>

    <div>
      The game ends when you die (your health hits zero) or survive through the
      deck. Success depends on smart risk-taking and order of play.
    </div>

    <div className={styles.suites}>
      <div
        className={styles.suite}
        style={{ [COLOR]: "var(--black)" } as CSSProperties}
      >
        ♣
      </div>
      <div
        className={styles.suite}
        style={{ [COLOR]: "var(--red)" } as CSSProperties}
      >
        ♥{" "}
      </div>
      <div
        className={styles.suite}
        style={{ [COLOR]: "var(--black)" } as CSSProperties}
      >
        ♠
      </div>
      <div
        className={styles.suite}
        style={{ [COLOR]: "var(--red)" } as CSSProperties}
      >
        ♦
      </div>
    </div>
  </div>
);
