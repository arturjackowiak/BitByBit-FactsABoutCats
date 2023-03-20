import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { FactsContextProvider } from "./context/FactsContext";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <GlobalStyles />
    <FactsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FactsContextProvider>
  </StrictMode>
);
