import { motion } from "framer-motion";
import { customHooks_ } from "../../hooks";
import propTypes from "prop-types";
function Description({ className = "" }) {
  const { variant_ } = customHooks_.useTransition();

  return (
    <motion.div
      variants={variant_.BT}
      className={`${className} w-auto max-w-[250px] text-white`}
    >
      <h5 className="text-[13.28px] font-semibold">Random Text</h5>
      <p className="text-[9.96px] font-semibold">
        Improve him believe opinion offered met and end cheered forbade.
        Friendly as stronger speedily by recurred. Son interest wandered sir
        addition end say. Manners beloved affixed picture men ask.
      </p>
    </motion.div>
  );
}

Description.propTypes = {
  className: propTypes.string,
};
export default Description;
