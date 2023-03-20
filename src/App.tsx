import { Route, Routes } from 'react-router-dom';

import AppLayout from './layouts/AppLayout/AppLayout';
import { EViewType } from './enums/EViewType';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RandomFactPage from './pages/RandomFactPage/RandomFactPage';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />} path={EViewType.HOME}>
        <Route element={<HomePage />} path={EViewType.HOME} />
        <Route element={<RandomFactPage />} path={EViewType.RANDOM_FACT} />
        <Route element={<NotFoundPage />} path={EViewType.NOT_FOUND} />
      </Route>
    </Routes>
  );
}

export default App;
