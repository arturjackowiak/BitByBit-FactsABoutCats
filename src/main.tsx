import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyles from 'Styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
