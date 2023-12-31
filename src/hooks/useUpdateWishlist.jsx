import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useUpdateWishlist = () => {
  const { user } = useAuth();
  const updateWishlist = useMutation({
    mutationFn: async (updatedWishlist) => {
      return await axios.put(
        `https://nex-techy-server.vercel.app/api/v1/blogs/wishlist/${user?.email}`,
        updatedWishlist
      );
    },
  });

  return updateWishlist;
};

export default useUpdateWishlist;
