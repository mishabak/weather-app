import PropTypes from "prop-types";

const Input = ({ children, cback = () => {}, type = "text", ...props }) => {
  return (
    <div className="  relative h-fit">
      <div className="text-red-800 text-[10px] absolute  top-0 mt-[-4px]">
        {children}
      </div>
      <input
        type={type}
        onChange={(e) => cback(props.name, e.target.value)}
        className={` w-full outline-none mt-4 bg-white rounded-md px-2 text-xs py-1 min-w-44`}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  cback: PropTypes.func,
};

export default Input;
