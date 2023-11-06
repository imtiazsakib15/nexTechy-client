import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import SectionContainer from "../components/SectionContainer";

const AllBlogs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () => axios.get("http://localhost:5000/api/v1/blogs"),
  });
  const blogs = data?.data || [];
  console.log(blogs, isLoading, error);
  return (
    <SectionContainer>
      <div className="py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.length > 0 &&
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AllBlogs;
