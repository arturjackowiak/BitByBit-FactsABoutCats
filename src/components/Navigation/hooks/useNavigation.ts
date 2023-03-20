import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState(pathname);

  const handleSelect = useCallback(
    (route: string) => {
      setActiveRoute(route);
      navigate(route);
    },
    [navigate]
  );

  return { activeRoute, handleSelect };
};
