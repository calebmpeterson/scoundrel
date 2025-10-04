import type { FC } from "react";
import type { Card } from "../types";
import styles from "./CardDisplay.module.css";

const SUITE_DISPLAY = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
};

const ROLE_DISPLAY = {
  hearts: "❤️‍🩹",
  diamonds: "⚔️",
  clubs: "🐉",
  spades: "🧌",
};

interface Props extends Card {
  size?: "small" | "large";
  isInteractive?: boolean;
}

export const CardDisplay: FC<Props> = ({
  suite,
  face,
  size = "small",
  isInteractive,
}) => {
  return (
    <div
      className={styles.card}
      data-suite={suite}
      data-size={size}
      role={isInteractive ? "button" : "none"}
    >
      <div className={styles.suite} data-location="top-left" data-size={size}>
        {SUITE_DISPLAY[suite]}
      </div>

      {size === "large" && (
        <div className={styles.role} data-size={size}>
          {ROLE_DISPLAY[suite]}
        </div>
      )}

      <div className={styles.face} data-size={size}>
        {face}
      </div>

      <div
        className={styles.suite}
        data-location="bottom-right"
        data-size={size}
      >
        {SUITE_DISPLAY[suite]}
      </div>
    </div>
  );
};
