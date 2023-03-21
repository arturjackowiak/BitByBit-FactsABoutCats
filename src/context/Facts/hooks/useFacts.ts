import { useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { FactType } from 'Types/FactType';

const defaultFactsLink = 'https://catfact.ninja/facts?max_length=75';

export const useFacts = () => {
  const localFacts = window.localStorage.getItem('facts');
  const defaultValue = localFacts ? JSON.parse(localFacts) : [];
  const [facts, setFacts] = useState<FactType[]>(defaultValue);
  const [isFetching, setIsFetching] = useState(false);

  const deleteFact = useCallback(
    (factId: string) => setFacts((prev) => prev.filter(({ id }) => id !== factId)),
    [setFacts]
  );

  const editFact = useCallback(
    (factId: string, editedFact: FactType) => {
      setFacts((prev) => prev.map((fact) => (fact.id === factId ? editedFact : fact)));
    },
    [setFacts]
  );

  const addFact = useCallback(
    (newFact: FactType) => {
      setFacts((prev) => [...prev, newFact]);
    },
    [setFacts]
  );

  const fetchFacts = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(defaultFactsLink);
      const { data } = await response.json();
      const factsList = data.map((fact: FactType) => ({
        ...fact,
        id: nanoid()
      }));

      setFacts(factsList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (localFacts) return;
    fetchFacts();
  }, [localFacts]);

  useEffect(() => {
    window.localStorage.setItem('facts', JSON.stringify(facts));
  }, [facts]);

  return { facts, addFact, editFact, deleteFact, isFetching };
};
