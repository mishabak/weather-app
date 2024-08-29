import { motion } from "framer-motion";

const CustomAnimate = ({ children, variant = {}, className }) => {
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

export default CustomAnimate;
