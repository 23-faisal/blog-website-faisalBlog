import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({ blogs, currentPage, pageSize, handlePageChange }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  console.log(totalPages);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          key={pageNumber}
          className={
            pageNumber === currentPage
              ? "bg-orange-500 px-3 py-1 rounded-full text-white border-[#e7e7e7] "
              : " bg-gray-50 px-3 py-1 rounded-full text-slate-950 border-[#e7e7e7]"
          }
        >
          <a
            className="text-xl font-headline "
            href="#"
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <ul className="my-8 flex items-center justify-center  gap-6 ">
      <li>
        <button
          className={currentPage === 1 && "text-gray-500"}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      <div className="flex items-center gap-4 ">{renderPaginationLinks()}</div>
      <li>
        <button
          className={currentPage === totalPages && "text-gray-500"}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
