import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useTimeDifference from "../hooks/useTimeDifference";
import Skeleton from "react-loading-skeleton";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { BiErrorCircle } from "react-icons/bi";

const BlogDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const calculateTimeDifference = useTimeDifference();
  const { isLoading, error, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () =>
      axios.get(`https://nex-techy-server.vercel.app/api/v1/blogs/${id}`),
  });

  const { author, category, image, long_desc, short_desc, time, title, _id } =
    data?.data || {};

  const addComment = useMutation({
    mutationFn: async (comment) => {
      return await axios.post(
        `https://nex-techy-server.vercel.app/api/v1/blogs/comments`,
        comment
      );
    },
  });
  const { data: commentsData, refetch: commentsRefetch } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios.get(
        `https://nex-techy-server.vercel.app/api/v1/blogs/${id}/comments`
      ),
  });
  const comments = commentsData?.data || [];
  console.log(comments);
  const handleCommentPost = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const author = {
      name: user.displayName,
      photo: user.photoURL,
    };
    const newComment = { comment, author, blogId: _id };

    addComment.mutate(newComment, {
      onSuccess: (result) => {
        console.log(result?.data);
        if (result?.data?.insertedId) {
          event.target.reset();
          commentsRefetch();
        }
      },
    });
  };

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
      <div className="mt-8">
        <hr />
        <h2 className="text-2xl font-bold mt-5">Comments</h2>

        <div className="mt-5">
          {user?.email === author?.email ? (
            <p className="text-red-500 font-semibold flex items-center gap-1">
              <BiErrorCircle />
              Author can not comment on own blog
            </p>
          ) : (
            <form onSubmit={handleCommentPost} className="max-w-md">
              <label
                htmlFor="comment"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="text-white bg-black px-8 py-2 mt-4"
              >
                Post
              </button>
            </form>
          )}
        </div>

        <div className="my-12 space-y-5">
          {comments?.length > 0 &&
            comments.map((comment) => (
              <div key={comment?._id} className="flex gap-2 max-w-md">
                <img
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                  src={comment?.author?.photo}
                  alt={comment?.author?.name}
                />
                <div>
                  <h4 className="text-sm font-semibold">
                    {comment?.author?.name}
                  </h4>
                  <p>{comment?.comment}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
