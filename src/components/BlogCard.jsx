import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useTimeDifference from "../hooks/useTimeDifference";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useGetWishlist from "../hooks/useGetWishlist";
import useUpdateWishlist from "../hooks/useUpdateWishlist";

const BlogCard = ({ blog }) => {
  const calculateTimeDifference = useTimeDifference();
  const { _id, title, category, image, time, short_desc } = blog;
  const { user } = useAuth();
  const wishlistDetails = useGetWishlist();
  const updateWishlistDetails = useUpdateWishlist();
  const location = useLocation();
  console.log(location.pathname);

  const handleAddToWishlist = () => {
    let newWishlistDetails = {};
    if (wishlistDetails?.wishlist?.length > 0) {
      const previousWishlist = wishlistDetails.wishlist;
      if (previousWishlist.includes(_id)) return toast.error("Already Added!");
      newWishlistDetails = {
        email: user?.email,
        wishlist: [...previousWishlist, _id],
      };
    } else {
      newWishlistDetails = { email: user?.email, wishlist: [_id] };
    }

    updateWishlistDetails.mutate(newWishlistDetails);
    const result = updateWishlistDetails?.data?.data;
    if (result?.modifiedCount === 1 || result?.upsertedCount === 1)
      toast.success("Successfully Add To Wishlist!");
  };

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
      <div className="flex flex-col justify-between space-y-3 mt-6">
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
            className="text-blue-700 font-bold underline"
          >
            Read More...
          </Link>
        </p>
        {location.pathname === "/wishlist" ? (
          <button className="px-4 py-2 bg-red-600 text-white font-semibold hover:scale-95 duration-200">
            Delete From Wishlist
          </button>
        ) : (
          <button
            onClick={handleAddToWishlist}
            className="px-4 py-2 bg-black text-white font-semibold hover:scale-95 duration-200"
          >
            Add To Wishlist
          </button>
        )}
      </div>
    </div>
  );
};
BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
