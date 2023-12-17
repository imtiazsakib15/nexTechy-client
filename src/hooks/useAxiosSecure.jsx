import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";


const axiosSecure = axios.create({
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log(error);
          // logOut()
          //   .then((result) => {
          //     console.log(result);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
        }
      }
    );
  }, [logOut]);
  return axiosSecure;
};

export default useAxiosSecure;
