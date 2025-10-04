import type { Card, Face, Suite } from "../types";

export const createCard = (suite: Suite, face: Face): Card => ({ suite, face });
