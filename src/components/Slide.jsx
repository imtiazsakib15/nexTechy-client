import PropTypes from "prop-types";

const Slide = ({ slide }) => {
  return (
    <div className="w-full h[60vh] sm:h-[80vh] relative rounded-md">
      <img
        className="w-full h-full object-cover rounded-md -z-20 absolute"
        src={slide.img}
        alt="slider-image"
      />
      <div className="w-full h-full flex flex-col justify-center px-12 py-20 bg-gradient-to-r from-black to-gray-900 sm:to-gray-400 opacity-90 rounded-md">
        <p className="text-center sm:text-left max-w-xl text-white text-xl sm:text-3xl lg:text-4xl font-semibold">
          &quot;{slide.quote}&quot;
        </p>
        <span className="text-gray-400 font-semibold mt-5 text-center sm:text-left">
          -{slide.author}
        </span>
      </div>
    </div>
  );
};
Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;
