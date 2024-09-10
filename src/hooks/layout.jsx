import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { layoutSelector } from "../features/layout/slice";

function useLayout() {
  const { pathname } = useLocation();
  const theme = useSelector(layoutSelector.theme);
  return { pathname, theme };
}

export default useLayout;
