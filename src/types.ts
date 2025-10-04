export const SUITES = ["hearts", "diamonds", "spades", "clubs"] as const;

export const FACES = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
] as const;

export type Suite = (typeof SUITES)[number];

export type Face = (typeof FACES)[number];

export type Card = {
  suite: Suite;
  face: Face;
};
