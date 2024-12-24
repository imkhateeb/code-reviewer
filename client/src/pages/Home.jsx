import { ArrowUpRight } from "@phosphor-icons/react";
import { blackLogo } from "../assets";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col gap-4 lg:w-[60%] md:w-[80%] w-[90%]">
        <div>
          <img src={blackLogo} alt="logo" className="w-[80px] h-[80px]" />
          <p className="font-bold">CodeAnt AI Presents.</p>
        </div>
        <p className="text-7xl max-md:text-5xl bold-poppins">
          {"AI-Driven Code Quality Assurance"}
        </p>
        <p className="text-lg font-semibold text-gray-500 underline">
          {
            "Enhance your codebase with AI-powered reviews that detect and auto-fix quality issues and security vulnerabilities across 30+ languages."
          }
        </p>
        {localStorage.getItem("github_user_token") ? (
          <Link
            to={"/dashboard/repositories"}
            className="py-3 px-5 border-[2.5px] w-[240px] text-center cursor-pointer border-black rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-200 ease-linear"
          >
            Your Repositories
            <ArrowUpRight size={25} weight="bold" />
          </Link>
        ) : (
          <Link
            to={"/auth"}
            className="py-3 px-5 border-[2.5px] w-[240px] text-center cursor-pointer border-black rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-200 ease-linear"
          >
            Try CodeAnt AI
            <ArrowUpRight size={25} weight="bold" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
