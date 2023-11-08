import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useGetWishlist = () => {
  const { user } = useAuth();
  const { data, refetch: wishlistRefetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      axios.get(
        `https://nex-techy-server-j3ujcuwko-imtiaz-ahmeds-projects.vercel.app/api/v1/blogs/wishlist/${user?.email}`
      ),
  });
  const wishlistDetails = data?.data;
  return { wishlistDetails, wishlistRefetch };
};

export default useGetWishlist;
