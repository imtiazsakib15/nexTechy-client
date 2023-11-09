import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import SectionContainer from "../components/SectionContainer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRef } from "react";

const AllBlogs = () => {
  const categoryRef = useRef("");
  const titleRef = useRef("");
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () =>
      axios.get(
        `http://localhost:5000/api/v1/blogs?category=${categoryRef.current.value}&title=${titleRef.current.value}`
      ),
  });
  const blogs = data?.data || [];

  if (error)
    return (
      <h2 className="grid place-items-center h-[80vh] text-xl md:text-4xl font-bold">
        An Error Occured! Please Try Again!
      </h2>
    );
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(categoryRef.current.value, titleRef.current.value);
    refetch();
  };

  return (
    <SectionContainer>
      <div className="pt-12 pb-20">
        <h2 className="text-4xl font-bold text-center mb-8">All Blogs</h2>
        <form
          onChange={handleSearch}
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-5 justify-between items-center pb-5"
        >
          <div className="flex items-center gap-2">
            <p className="font-semibold">Sort by category:</p>
            <select
              ref={categoryRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option value="">All</option>
              <option value="Coding and Development">
                Coding and Development
              </option>
              <option value="AI and Machine Learning">
                AI and Machine Learning
              </option>
              <option value="Internet of Things (IoT)">
                Internet of Things (IoT)
              </option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Digital Marketing and SEO">
                Digital Marketing and SEO
              </option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              ref={titleRef}
              defaultValue=""
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button className="text-white bg-black font-semibold rounded-lg px-4 py-2">
              Search
            </button>
          </div>
        </form>

        <hr />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
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
      </div>
    </SectionContainer>
  );
};

export default AllBlogs;
