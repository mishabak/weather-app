import propTypes from "prop-types";

function DialogDesc({ desc }) {
  return <p className="mt-2 text-sm/6 text-white/50">{desc}</p>;
}

DialogDesc.propTypes = {
  desc: propTypes.string,
};

export default DialogDesc;
