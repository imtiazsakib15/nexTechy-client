import PropTypes from "prop-types";

const SectionContainer = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-14">{children}</div>
  );
};
SectionContainer.propTypes = {
  children: PropTypes.node,
};

export default SectionContainer;
