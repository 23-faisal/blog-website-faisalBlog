import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      // filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);

      const data = await response.json();
      setBlogs(data);
    };
    fetchBlogData();
  }, [currentPage, pageSize, selectedCategory]);

  // Pagination Button

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Category Change

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category section  */}
      <div>
        <CategorySelection
          handleCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* Blog Card Section */}
      <div>
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>

      {/* Pagination */}
      <div>
        <Pagination
          handlePageChange={handlePageChange}
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>

      {/*  */}
    </div>
  );
};

export default BlogPage;
