import React from "react";
import { Link } from "react-router-dom";

const Header = ({ usertype }) => {
  return (
    <header className="bg-[#c13030] shadow-lg py-2 sticky top-0 z-[99999]">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="logo flex items-center flex-grow">
          <img
            src="/images/logo.jpeg"
            alt="Bhuvi Logo"
            className="w-10 sm:w-12 rounded-full"
          />
          <span className="ml-2 font-fantasy text-[18px] sm:text-[20px] lg:text-[22px] text-white">
            Bhuvi
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Link to={`/login/${encodeURIComponent(usertype)}`}>
            <button className="bg-white text-black text-base sm:text-lg lg:text-lg px-4 sm:px-6 lg:px-4 py-2 sm:py-3 lg:py-2 rounded-full transition-all">
              <i className="fa fa-sign-in mr-2"></i> LOGIN
            </button>
          </Link>
          <Link to="/post-property">
          <button className="bg-white text-black text-base sm:text-lg lg:text-lg px-4 sm:px-6 lg:px-4 py-2 sm:py-3 lg:py-2 rounded-full transition-all">
            Post Property
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
