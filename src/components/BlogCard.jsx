import { FaUser } from "react-icons/fa";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filterBlog = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(filterBlog);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 mx-4 xl:mx-0">
      {filterBlog.map((blog) => (
        <div
          className="p-5 md:shadow-lg border rounded-2xl cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out"
          key={blog.id}
        >
          <div className="mt-1 my-6">
            <img
              className="w-full rounded-xl "
              src={blog.image}
              alt={blog.title}
            />
          </div>
          <div className="h-[80px] md:h-[100px] lg:h-[100px]">
            <span className="mt-4 font-bold hover:text-blue-600 cursor-pointer text-lg leading-6 ">
              {blog.title.substring(0, 100)}
            </span>
          </div>
          <p className="flex items-center gap-2 mb-2 text-gray-600 text-md mt-2">
            <FaUser className="text-teal-500" />
            <span className="text-teal-500 ">{blog.author}</span>
          </p>
          <p className="text-gray-400 text-sm flex items-center justify-between">
            <span>Published At: {blog.published_date}</span>
            <span className="text-green-400 ">{blog.reading_time} read</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
