import PropTypes from "prop-types";

const Button = ({ children }) => {
  return <span className="w-full px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">{children}</span>;
};
Button.propTypes = {
  children: PropTypes.string,
};
export default Button;
