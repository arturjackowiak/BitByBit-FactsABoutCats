import { createContext, useContext } from "react";

import { FactType } from "../../types/FactType";
import { useFacts } from "./hooks/useFacts";

interface IFactsContext {
  addFact: (newFact: FactType) => void;
  deleteFact: (factId: string) => void;
  editFact: (factId: string, editedFact: FactType) => void;
  facts: FactType[];
  isFetching: boolean;
}

interface IFactsContextProviderProps {
  children: JSX.Element;
}

const FactsContext = createContext<IFactsContext | undefined>(undefined);

const FactsContextProvider = ({ children }: IFactsContextProviderProps) => {
  const { facts, addFact, editFact, deleteFact, isFetching } = useFacts();

  return (
    <FactsContext.Provider
      value={{ facts, deleteFact, editFact, addFact, isFetching }}
    >
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
