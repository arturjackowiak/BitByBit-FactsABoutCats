import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { FactsContextProvider } from 'Context/Facts/FactsContext';
import { router } from 'Routes/router';
import FullSiteLoader from 'Components/FullSiteLoader/FullSiteLoader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorHandler from 'Components/ErrorBoundary/ErrorHandler';

function App() {
  return (
    <FactsContextProvider>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Suspense fallback={<FullSiteLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </FactsContextProvider>
  );
}

export default App;
