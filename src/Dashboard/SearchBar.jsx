import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="bg-slate-100 sticky top-16 z-10">
    <div className="flex justify-center items-center flex-wrap p-2 my-5 mb-10">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border-2 border-gray-400 rounded-full w-1/2 h-12 mb-2 md:mb-0 md:mr-2"/>
      <button className="bg-red-700 text-white h-12 px-2 rounded-full flex items-center justify-center text-lg cursor-pointer">
        <FaSearch className="mr-2" /> Search
      </button>
    </div>
    </div>
  );
};

export default SearchBar;
