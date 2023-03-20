import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { nanoid } from "nanoid";

import { FactType } from "../types/FactType";

interface IFactsContext {
  facts: FactType[];
}

interface IFactsContextProviderProps {
  children: JSX.Element;
}

const FactsContext = createContext<IFactsContext | undefined>(undefined);

const FactsContextProvider = ({ children }: IFactsContextProviderProps) => {
  const localFacts = JSON.parse(window.localStorage.getItem("facts") ?? "{}");
  const [facts, setFacts] = useState<FactType[]>(localFacts);
  const isFetching = useRef(false);

  const fetchFacts = useCallback(async () => {
    isFetching.current = true;
    try {
      const response = await fetch("https://catfact.ninja/facts?limit=10");
      const cats = await response.json();
      const factsList = cats.data;

      factsList.forEach((fact: FactType) => (fact.id = nanoid()));

      setFacts(factsList);
    } catch (error) {
      console.error(error);
    }
    isFetching.current = false;
  }, []);

  useEffect(() => {
    if (isFetching.current || facts.length) return;
    fetchFacts();
  }, [fetchFacts, isFetching, facts]);

  useEffect(() => {
    window.localStorage.setItem("facts", JSON.stringify(facts));
  }, [facts]);

  return (
    <FactsContext.Provider value={{ facts }}>{children}</FactsContext.Provider>
  );
};

const useFactsContext = () => {
  const context = useContext(FactsContext);
  if (context === undefined) {
    throw new Error("You have to add FactsContextProvider");
  }
  return context;
};

export { FactsContextProvider, useFactsContext };
