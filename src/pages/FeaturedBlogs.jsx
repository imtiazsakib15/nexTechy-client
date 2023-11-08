import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionContainer from "../components/SectionContainer";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
  const { error, data } = useQuery({
    queryKey: ["recentBlogs"],
    queryFn: () =>
      axios.get("https://nex-techy-server.vercel.app/api/v1/featured-blogs"),
  });
  const featuredBlogs = data?.data || [];

  const columns = [
    {
      name: <h4 className="text-base font-bold">Serial No.</h4>,
      selector: (row, index) => index + 1,
      width: "120px",
    },
    {
      name: <h4 className="text-base font-bold">Profile</h4>,
      selector: (row) => (
        <img
          className="w-10 h-10 rounded-full"
          src={row?.author?.photo}
          alt={row?.author?.name}
        />
      ),
      width: "120px",
    },
    {
      name: <h4 className="text-base font-bold">Author</h4>,
      selector: (row) => row?.author?.name,
      width: "250px",
    },
    {
      name: <h4 className="text-base font-bold">Blog Title</h4>,
      selector: (row) => row?.title,
    },
  ];

  if (error)
    return (
      <h2 className="grid place-items-center h-[80vh] text-xl md:text-4xl font-bold">
        An Error Occured! Please Try Again!
      </h2>
    );
  return (
    <div className="pt-12 pb-20">
      <SectionContainer>
        <h2 className="text-4xl font-bold text-center mb-8">Featured Blogs</h2>
        <DataTable columns={columns} data={featuredBlogs} />
      </SectionContainer>
    </div>
  );
};

export default FeaturedBlogs;
