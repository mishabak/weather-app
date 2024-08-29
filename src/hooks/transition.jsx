import { useLocation } from "react-router-dom";
const useTransition = () => {
  const { key } = useLocation();
  const fadeVariant = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,

      transition: { duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };


  return { fadeVariant, key };
};

export default useTransition;
