const CategorySelection = ({
  handleCategoryChange,
  selectedCategory,
  activeCategory,
}) => {
  const categories = ["Health", "Security", "AI", "Apps", "Tech"];

  return (
    <div className="px-4 mb-8 lg:space-x-8 flex flex-wrap items-center border-b-2 py-6 text-gray-600 font-semibold">
      <button
        onClick={() => handleCategoryChange(null)}
        className={`px-4 py-2 mr-4  font-semibold rounded-full  ${
          !activeCategory ? "bg-orange-500 text-white" : "bg-slate-100"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 mx-2  font-semibold rounded-full  ${
            activeCategory === category
              ? "bg-orange-500 text-white"
              : "bg-slate-100"
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
