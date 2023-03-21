import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import { FactType } from 'Types/FactType';

const defaultFactsLink = 'https://catfact.ninja/facts?max_length=75';

export const useFacts = () => {
  const localFacts = JSON.parse(window.localStorage.getItem('facts') ?? '[]');
  const [facts, setFacts] = useState<FactType[]>(localFacts);
  const [isFetching, setIsFetching] = useState(false);
  const firstRender = useRef(true);

  const deleteFact = useCallback(
    (factId: string) => setFacts((prev) => prev.filter(({ id }) => id !== factId)),
    [facts, setFacts]
  );

  const editFact = useCallback(
    (factId: string, editedFact: FactType) => {
      setFacts((prev) => prev.map((fact) => (fact.id === factId ? editedFact : fact)));
    },
    [facts, setFacts]
  );

  const addFact = useCallback(
    (newFact: FactType) => {
      setFacts((prev) => [...prev, newFact]);
    },
    [facts, setFacts]
  );

  const fetchFacts = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(defaultFactsLink);
      const { data } = await response.json();
      data.forEach((fact: FactType) => ({
        ...fact,
        id: nanoid()
      }));

      setFacts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (!firstRender.current) return;
    fetchFacts();
    firstRender.current = false;
  }, []);

  useEffect(() => {
    window.localStorage.setItem('facts', JSON.stringify(facts));
  }, [facts]);

  const memoizedFacts = useMemo(
    () => ({
      ...facts
    }),
    [facts]
  );

  return { facts: memoizedFacts, addFact, editFact, deleteFact, isFetching };
};
