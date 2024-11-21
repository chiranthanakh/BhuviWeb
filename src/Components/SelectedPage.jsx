import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CardLayout from './CardLayout';
import Laucher from './Laucher';

const PageSwitcher = () => {
  const [showProperty, setShowProperty] = useState(true);

  const handleButtonClick = (type) => {
    setShowProperty(type === 'property');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="sticky top-0 w-full flex flex-wrap items-center justify-between p-4 z-10">
        <div className="flex flex-wrap space-x-2 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-start shrink-0">
          <button
            className={`text-black font-semibold px-3 py-2 text-sm sm:text-base rounded-full ${
              showProperty ? 'bg-yellow-500' : 'bg-transparent'
            }`}
            onClick={() => handleButtonClick('property')}
          >
            Property
          </button>
          <button
            className={`text-black font-semibold px-3 py-2 text-sm sm:text-base rounded-full ${
              !showProperty ? 'bg-yellow-500' : 'bg-transparent'
            }`}
            onClick={() => handleButtonClick('construction')}
          >
            Construction
          </button>
        </div>

        <div className="w-full mt-4 sm:mt-0 sm:w-auto sm:flex-grow shrink">
          <SearchBar />
        </div>
      </div>

      <div className="mt-6 text-center w-full">
        {showProperty ? (
          <>
            <CardLayout />
            <Laucher />
          </>
        ) : (
          <div className="m-6 md:m-20">
            <p>This is the Construction section content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageSwitcher;
