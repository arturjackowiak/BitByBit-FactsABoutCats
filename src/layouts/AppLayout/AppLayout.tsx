import { Outlet } from "react-router-dom";

import { AppLayoutWrapper } from "./AppLayout.style";

const AppLayout = () => (
  <AppLayoutWrapper>
    <Outlet />
  </AppLayoutWrapper>
);

export default AppLayout;
