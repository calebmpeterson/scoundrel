import { flatMap, map } from "lodash";
import { FACES, SUITES } from "../types";
import { createCard } from "./createCard";

export const createDeck = () =>
  flatMap(SUITES, (suite) => map(FACES, (face) => createCard(suite, face)));
