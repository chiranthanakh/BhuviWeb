import React from "react";
import { Link } from "react-router-dom";

const Header = ({ usertype }) => {
  return (
    <header className="bg-[#c13030] shadow-lg shadow-[rgb(0,22,84,0.1)] py-2 sticky top-0 z-[99999]">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="logo flex items-center flex-grow">
          <img
            src="/images/logo.jpeg"
            alt="Bhuvi Logo"
            className="w-12 sm:w-10 rounded-full"
          />
          <span className="ml-2 font-fantasy text-[18px] sm:text-[16px] lg:text-[20px]">
            Bhuvi
          </span>
        </div>
        <div className="flex items-center">
          <Link to={`/login/${encodeURIComponent(usertype)}`}>
            <button className="btn1 ml-3 sm:ml-2 lg:ml-5 transition-all font-normal bg-white text-black text-xs sm:text-sm py-2 px-4 rounded-full sm:py-3 sm:px-5 lg:py-4 lg:px-8">
              <i className="fa fa-sign-in mr-1"></i> LOGIN
            </button>
          </Link>
          <button className="btn2 ml-2 sm:ml-2 lg:ml-5 transition-all font-normal bg-white text-black text-xs sm:text-sm py-2 px-4 rounded-full sm:py-3 sm:px-5 lg:py-4 lg:px-8">
            Post Property
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
