import { useCallback, useState } from 'react';

import { useFactsContext } from 'Context/Facts/FactsContext';
import { getRandomElementFromArray } from 'Helpers/getRandomElementFromArray';

export const useRandomFact = () => {
  const { facts } = useFactsContext();
  const [randomFact, setRandomFact] = useState(getRandomElementFromArray(facts));

  const handleClick = useCallback(() => setRandomFact(getRandomElementFromArray(facts)), [facts]);

  return { facts, randomFact, handleClick };
};
