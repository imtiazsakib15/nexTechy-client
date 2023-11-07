import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import useTimeDifference from "../hooks/useTimeDifference";
import Skeleton from "react-loading-skeleton";

const BlogDetails = () => {
  const { id } = useParams();
  const calculateTimeDifference = useTimeDifference();
  const { isLoading, error, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () => axios.get(`http://localhost:5000/api/v1/blogs/${id}`),
  });
  console.log(data?.data, isLoading, error);
  const { author, category, image, long_desc, short_desc, time, title, _id } =
    data?.data || {};
  console.log(author, category, image, time, title, _id);
  if (error)
    return (
      <h2 className="grid place-items-center h-[80vh] text-xl md:text-4xl font-bold">
        An Error Occured! Please Try Again!
      </h2>
    );

  return (
    <div className="max-w-6xl px-4 sm:px-8 md:px-14 mx-auto mt-8 sm:mt-14 mb-20 space-y-6">
      {isLoading ? (
        <p>
          <Skeleton count={3} />
          <br />
          <Skeleton className="h-48 md:h-60 lg:72" />
          <br />
          <Skeleton count={2} />
          <br />
          <Skeleton count={10} />
        </p>
      ) : (
        <>
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold">
            {title}
          </h2>
          <div className="flex gap-3">
            <img className="w-12 h-12 rounded-full" src={author?.photo} alt="" />
            <div className="text-sm">
              <p className="font-bold">{author?.name}</p>
              <p>{calculateTimeDifference(time)}</p>
            </div>
          </div>
          <hr />
          <img className="w-full rounded py-6" src={image} alt="" />
          <p className="font-medium">{short_desc}</p>
          <p>{long_desc}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
