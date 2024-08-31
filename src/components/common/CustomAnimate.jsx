import { motion } from "framer-motion";
import propTypes from "prop-types";

const CustomAnimate = ({ children, className = "", variant = {} }) => {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

CustomAnimate.propTypes = {
  children: propTypes.node,
  variant: propTypes.object,
  className: propTypes.string,
};

export default CustomAnimate;
