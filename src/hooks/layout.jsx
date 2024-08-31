import { useLocation } from "react-router-dom";

function useLayout() {
  const { pathname } = useLocation();
  return { pathname };
}

export default useLayout;
