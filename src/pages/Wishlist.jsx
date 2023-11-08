import BlogCard from "../components/BlogCard";
import SectionContainer from "../components/SectionContainer";
import useGetWishlist from "../hooks/useGetWishlist";
import axios from "axios";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { wishlistDetails } = useGetWishlist();
  const [wishlistBlogs, setWishlistBlogs] = useState([]);

  useEffect(() => {
    let wishlistIds = wishlistDetails?.wishlist || [];
    axios
      .post("http://localhost:5000/api/v1/blogs/my-wishlist", wishlistIds)
      .then((res) => setWishlistBlogs(res.data));
  }, [wishlistDetails?.wishlist]);

  return (
    <div className="pt-10 pb-16">
      <SectionContainer>
        <h2 className="text-4xl font-bold text-center mb-8">My Wishlist</h2>
        {wishlistBlogs?.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[60vh]">
            <h2 className="text-2xl font-semibold">Wishlist is Empty!</h2>
          </div>
        )}
      </SectionContainer>
    </div>
  );
};

export default Wishlist;
