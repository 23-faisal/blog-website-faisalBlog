import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="px-4 py-24 md:py-32 bg-black text-white">
        <div className="text-center flex flex-col items-center   ">
          <h1 className="text-3xl mb-12 font-headline  md:text-5xl lg:text-7xl font-bold">
            Welcome To Our Blog Page
          </h1>
          <p className="text-lg text-gray-50 font-primary md:text-xl lg:text-xl lg:w-3/5 mx-auto mt-6">
            Start your blog today and join a community of writers and readers
            who are passionate about sharing their ideas. We offer everything
            you need to get started, from helpful tips and tutorials.
          </p>

          <Link
            className=" flex items-center justify-center gap-2 font-bold font-primary rounded-sm mt-6 bg-orange-500 px-6 py-4 hover:text-orange-500 hover:bg-white transition ease-in-out duration-500  "
            to="/services"
          >
            <span>Learn More</span>
            <FaArrowRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
