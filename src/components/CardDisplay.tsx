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
  size?: "small" | "large" | "x-large";
  isInteractive?: boolean;
  onInteract?: (card: Card) => void;
}

export const CardDisplay: FC<Props> = ({
  suite,
  face,
  size = "small",
  isInteractive,
  onInteract,
}) => {
  const onClick = () => {
    onInteract?.({ suite, face });
  };

  return (
    <div
      className={styles.card}
      data-suite={suite}
      data-size={size}
      role={isInteractive ? "button" : "none"}
      onClick={isInteractive ? onClick : undefined}
    >
      <div className={styles.suite} data-location="top-left" data-size={size}>
        {SUITE_DISPLAY[suite]}
      </div>

      {["large", "x-large"].includes(size) && (
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

type BlankCardProps = Pick<Props, "size">;

export const BlankCard: FC<BlankCardProps> = ({ size = "small" }) => (
  <div className={styles.card} data-size={size} data-blank />
);
