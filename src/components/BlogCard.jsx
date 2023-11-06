import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  const { title, category, image, short_desc } = blog;

  return (
    <div className="p-5 border shadow rounded">
      <img
        className="rounded w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between space-y-2 mt-5">
        <span className="w-max px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
          {category}
        </span>
        <h4 className="text-xl font-bold">{title}</h4>
        <p>
          {short_desc.split(" ").slice(0, 15).join(" ")}{" "}
          <Link to={`/`} className="text-blue-700 font-bold hover:underline">
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
