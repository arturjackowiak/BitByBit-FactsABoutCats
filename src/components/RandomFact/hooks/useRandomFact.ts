import { useCallback, useMemo, useState } from "react";

import { useFactsContext } from "../../../context/FactsContext";
import { getRandomElementFromArray } from "../../../helpers/getRandomElementFromArray";

export const useRandomFact = () => {
  const { facts } = useFactsContext();
  const [randomFact, setRandomFact] = useState(
    getRandomElementFromArray(facts)
  );

  const handleClick = useCallback(
    () => setRandomFact(getRandomElementFromArray(facts)),
    [facts]
  );

  return { facts, randomFact, handleClick };
};
