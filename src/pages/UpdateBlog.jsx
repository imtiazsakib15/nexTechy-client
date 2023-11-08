import { useMutation } from "@tanstack/react-query";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useState } from "react";

const UpdateBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  axios.get(`http://localhost:5000/api/v1/blogs/${id}`).then((res) => {
    setBlog(res.data);
  });

  const updateBlog = useMutation({
    mutationFn: async (updatedBlog) => {
      return await axios.patch(
        `http://localhost:5000/api/v1/blogs/update/${id}/edit`,
        updatedBlog
      );
    },
  });

  const handleAddBlog = async (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const image = form.image.value;
    const category = form.category.value;
    const short_desc = form.short_desc.value;
    const long_desc = form.long_desc.value;

    const time = Date.now();

    const blog = { title, image, category, short_desc, long_desc, time };

    updateBlog.mutate(blog, {
      onSuccess: (result) => {
        if (result?.data?.modifiedCount) {
          toast.success("Blog Updated Successfully!");
        }
      },
    });
  };

  return (
    <div className="mt-12 mb-20">
      <SectionContainer>
        <h2 className="text-4xl font-semibold text-center">Update Blog</h2>
        <form onSubmit={handleAddBlog}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={blog?.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={blog?.image}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Categort
            </label>
            <select
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value={blog?.category}>{blog?.category}</option>
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
          <div className="mb-6">
            <label
              htmlFor="short_desc"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Short Description
            </label>
            <textarea
              id="short_desc"
              name="short_desc"
              defaultValue={blog?.short_desc}
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="long_desc"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Long Description
            </label>
            <textarea
              id="long_desc"
              name="long_desc"
              defaultValue={blog?.long_desc}
              rows="5"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="mt-5 w-max mx-auto">
            <button type="submit">
              <Button>Update Blog</Button>
            </button>
          </div>
        </form>
      </SectionContainer>
    </div>
  );
};

export default UpdateBlog;
