import { useLocation } from "react-router-dom";
const useTransition = () => {
  const { key } = useLocation();

  // fade animation ->>
  const fadeVariant = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,

      transition: { duration: 1.7},
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  // forward motion -->>
  const motion = (axis, flow, delay) => ({
    initial: {
      [axis]: flow,
      opacity: 0.1,
    },
    enter: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.7, delay },
    },
    exit: {
      opacity: 0.1,
      transition: { duration: 0.7, delay },
    },
  });

  const variant_ = {
    LR: motion("x", -100, 0.2),
    RL: motion("x", 100, 0.3),
    TB: motion("y", -100, 0.2),
    BT: motion("y", 100, 0.3),
  };

  // forward motion -->>
  const scaleUp = {
    initial: {
      scale: 1.2,
      opacity: 0.5,
    },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.1 },
    },
    exit: {
      opacity: 0.5,
      transition: { duration: 0.1 },
    },
  };

  return { fadeVariant, key, variant_, scaleUp };
};

export default useTransition;
