import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useGetWishlist = () => {
  const { user } = useAuth();
  const { data, refetch: wishlistRefetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      axios.get(`http://localhost:5000/api/v1/blogs/wishlist/${user?.email}`),
  });
  const wishlistDetails = data?.data;
  return { wishlistDetails, wishlistRefetch };
};

export default useGetWishlist;
