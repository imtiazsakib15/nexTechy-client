const BlogCard = ({ blog }) => {
  const { title, category, image, short_desc } = blog;
  return (
    <div className="p-5 border shadow rounded flex flex-col justify-between space-y-4">
      <img
        className="rounded w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <span className="w-max px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
        {category}
      </span>
      <h4 className="text-xl font-bold">{title}</h4>
      <p>{short_desc.split(" ").slice(0, 15).join(" ")}...</p>
    </div>
  );
};

export default BlogCard;
