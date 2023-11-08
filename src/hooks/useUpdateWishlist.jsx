import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useUpdateWishlist = () => {
  const { user } = useAuth();
  const updateWishlistDetails = useMutation({
    mutationFn: async (updatedWishlist) => {
      return await axios.put(
        `http://localhost:5000/api/v1/blogs/wishlist/${user?.email}`,
        updatedWishlist
      );
    },
  });

  return updateWishlistDetails;
};

export default useUpdateWishlist;
