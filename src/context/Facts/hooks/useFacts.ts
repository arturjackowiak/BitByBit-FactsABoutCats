import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import { FactType } from "../../../types/FactType";

const defaultFactsLink = "https://catfact.ninja/facts?limit=10";

export const useFacts = () => {
  const localFacts = JSON.parse(window.localStorage.getItem("facts") ?? "{}");
  const [facts, setFacts] = useState<FactType[]>(localFacts);
  const [isFetching, setIsFetching] = useState(false);

  const deleteFact = useCallback(
    (factId: string) =>
      setFacts((prev) => prev.filter(({ id }) => id !== factId)),
    [setFacts]
  );

  const editFact = useCallback(
    (factId: string, editedFact: FactType) => {
      setFacts((prev) =>
        prev.map((fact) => (fact.id === factId ? editedFact : fact))
      );
    },
    [setFacts]
  );

  const addFact = useCallback(
    (newFact: FactType) => {
      setFacts((prev) => [...prev, newFact]);
    },
    [setFacts]
  );

  const fetchFacts = useCallback(async () => {
    setIsFetching(true);
    try {
      const response = await fetch(defaultFactsLink);
      const cats = await response.json();
      const factsList = cats.data;

      factsList.forEach((fact: FactType) => (fact.id = nanoid()));

      setFacts(factsList);
    } catch (error) {
      console.error(error);
    }
    setIsFetching(false);
  }, []);

  useEffect(() => {
    if (isFetching || Array.isArray(facts)) return;
    fetchFacts();
  }, [fetchFacts, isFetching, facts]);

  useEffect(() => {
    window.localStorage.setItem("facts", JSON.stringify(facts));
  }, [facts]);

  return { facts, addFact, editFact, deleteFact, isFetching };
};
