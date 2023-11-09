import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetWishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data, refetch: wishlistRefetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      axiosSecure.get(
        `https://nex-techy-server.vercel.app/api/v1/blogs/wishlist/${user?.email}`
      ),
  });
  const wishlistDetails = data?.data || {};
  return { wishlistDetails, wishlistRefetch };
};

export default useGetWishlist;
