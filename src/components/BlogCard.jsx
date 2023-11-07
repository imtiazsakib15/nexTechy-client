import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useTimeDifference from "../hooks/useTimeDifference";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const BlogCard = ({ blog }) => {
  const calculateTimeDifference = useTimeDifference();
  const { _id, title, category, image, time, short_desc } = blog;

  return (
    <div className="p-5 border shadow rounded">
      <PhotoProvider>
        <PhotoView src={image}>
          <img
            className="rounded w-full h-48 object-cover"
            src={image}
            alt={title}
          />
        </PhotoView>
      </PhotoProvider>
      <div className="flex flex-col justify-between space-y-2 mt-5">
        <div className="flex items-center justify-between">
          <span className="w-max px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
            {category}
          </span>
          <span className="text-sm font-medium">
            {calculateTimeDifference(time)}
          </span>
        </div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p>
          {short_desc.split(" ").slice(0, 15).join(" ")}{" "}
          <Link
            to={`/blogs/${_id}`}
            className="text-blue-700 font-bold hover:underline"
          >
            Read More...
          </Link>
        </p>
      </div>
    </div>
  );
};
BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
