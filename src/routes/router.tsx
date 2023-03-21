import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { lazy } from 'react';

import { EViewType } from 'Enums/EViewType';
import AppLayout from 'Layouts/AppLayout/AppLayout';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const RandomFactPage = lazy(() => import('Pages/RandomFactPage/RandomFactPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage/NotFoundPage'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} path={EViewType.HOME}>
      <Route element={<HomePage />} path={EViewType.HOME} />
      <Route element={<RandomFactPage />} path={EViewType.RANDOM_FACT} />
      <Route element={<NotFoundPage />} path={EViewType.NOT_FOUND} />
    </Route>
  )
);
