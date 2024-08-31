import PropTypes from "prop-types";
function Button({ type = "submit", label = "Done", ...props }) {
  return (
    <button
      type={type}
      {...props}
      className="rounded-md px-5 py-1 bg-gray-800 hover:bg-gray-600 text-white text-sm"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
