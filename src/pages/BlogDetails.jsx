import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useTimeDifference from "../hooks/useTimeDifference";
import Skeleton from "react-loading-skeleton";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const BlogDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const calculateTimeDifference = useTimeDifference();
  const { isLoading, error, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () => axios.get(`http://localhost:5000/api/v1/blogs/${id}`),
  });

  const { author, category, image, long_desc, short_desc, time, title, _id } =
    data?.data || {};

  if (error)
    return (
      <h2 className="grid place-items-center h-[80vh] text-xl md:text-4xl font-bold">
        An Error Occured! Please Try Again!
      </h2>
    );

  return (
    <div className="max-w-6xl px-4 sm:px-8 md:px-14 mx-auto mt-8 sm:mt-14 mb-20">
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
        <div className="space-y-6">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold">
            {title}
          </h2>
          <div className="flex gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src={author?.photo}
              alt="author's photo"
            />
            <div className="text-sm">
              <p className="font-bold">{author?.name}</p>
              <p>{calculateTimeDifference(time)}</p>
            </div>
          </div>
          <hr />
          <p className="text-sm">
            Category:{" "}
            <span className="font-medium text-green-600">{category}</span>
          </p>
          <PhotoProvider>
            <PhotoView src={image}>
              <img className="w-full rounded pb-6" src={image} alt="" />
            </PhotoView>
          </PhotoProvider>

          <p className="font-medium">{short_desc}</p>
          <p>{long_desc}</p>
          {user?.email === author?.email && (
            <div className="pt-10 text-right">
              <Link to={`/blogs/update/${_id}/edit`}>
                <Button>Update Blog</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
