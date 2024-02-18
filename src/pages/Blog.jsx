import BlogPage from "../components/BlogPage";

const Blog = () => {
  return (
    <div className="">
      <div className="py-32 bg-black text-center px-4">
        <h1 className="text-3xl mb-12 font-headline text-white  md:text-5xl lg:text-7xl font-bold">
          Blog Page
        </h1>
      </div>

      {/* All blogs Container*/}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blog;
