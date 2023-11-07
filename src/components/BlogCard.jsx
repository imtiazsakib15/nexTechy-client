import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useTimeDifference from "../hooks/useTimeDifference";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useGetWishlist from "../hooks/useGetWishlist";

const BlogCard = ({ blog }) => {
  const calculateTimeDifference = useTimeDifference();
  const { _id, title, category, image, time, short_desc } = blog;
  const { user } = useAuth();
  const wishlist = useGetWishlist();

  const mutation = useMutation({
    mutationFn: async (updatedWishlist) => {
      return await axios.put(
        `http://localhost:5000/api/v1/blogs/wishlist/${user?.email}`,
        updatedWishlist
      );
    },
  });

  const handleAddToWishlist = () => {
    let newWishlist = {};
    if (wishlist?.wishlist?.length > 0) {
      const previousWishlist = wishlist.wishlist;
      if (previousWishlist.includes(_id)) return toast.error("Already Added!");
      newWishlist = {
        email: user?.email,
        wishlist: [...previousWishlist, _id],
      };
    } else {
      newWishlist = { email: user?.email, wishlist: [_id] };
    }

    mutation.mutate(newWishlist);
    const result = mutation?.data?.data;
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
        <button
          onClick={handleAddToWishlist}
          className="px-4 py-2 bg-black text-white font-semibold hover:scale-95 duration-200"
        >
          Add To Wishlist
        </button>
      </div>
    </div>
  );
};
BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
