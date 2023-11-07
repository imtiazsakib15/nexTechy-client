import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionContainer from "./SectionContainer";
import Skeleton from "react-loading-skeleton";
import BlogCard from "./BlogCard";

const RecentBlogs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () => axios.get("http://localhost:5000/api/v1/recent-blogs"),
  });
  const blogs = data?.data || [];
  if (error)
    return (
      <h2 className="grid place-items-center h-[80vh] text-xl md:text-4xl font-bold">
        An Error Occured! Please Try Again!
      </h2>
    );

  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-center mt-14 mb-8">
        Recent Blogs
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading && (
          <p>
            <Skeleton className="h-48" />
            <br />
            <Skeleton />
            <br />
            <Skeleton count={3} />
          </p>
        )}
        {blogs?.length > 0 &&
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </SectionContainer>
  );
};

export default RecentBlogs;
