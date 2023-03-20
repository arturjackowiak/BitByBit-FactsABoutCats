import { createContext, useContext, useEffect } from "react";

import { FactType } from "../../types/FactType";
import { useFacts } from "./hooks/useFacts";

interface IFactsContext {
  facts: FactType[];
  deleteFact: (factId: string) => void;
  editFact: (factId: string, editedFact: FactType) => void;
  addFact: (newFact: FactType) => void;
}

interface IFactsContextProviderProps {
  children: JSX.Element;
}

const FactsContext = createContext<IFactsContext | undefined>(undefined);

const FactsContextProvider = ({ children }: IFactsContextProviderProps) => {
  const { facts, addFact, editFact, deleteFact } = useFacts();

  return (
    <FactsContext.Provider value={{ facts, deleteFact, editFact, addFact }}>
      {children}
    </FactsContext.Provider>
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
