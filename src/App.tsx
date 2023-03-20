import { Route, Routes } from 'react-router-dom';

import AppLayout from 'Layouts/AppLayout/AppLayout';
import { EViewType } from 'Enums/EViewType';
import HomePage from 'Pages/HomePage/HomePage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import RandomFactPage from 'Pages/RandomFactPage/RandomFactPage';

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
