import { useAtomValue } from "jotai";
import type { FC } from "react";
import { deckAtom } from "../state";

export const ProgressDisplay: FC = () => {
  const deck = useAtomValue(deckAtom);

  return <div>{deck.length} cards remaining</div>;
};
