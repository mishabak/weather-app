import { useLocation, useNavigate } from "react-router-dom";

function useLayout() {
  const { pathname } = useLocation();
const navigate = useNavigate();
    
  const goToHome = () => {
    navigate("/weather");
  };

  return { pathname, goToHome };
}

export default useLayout;
