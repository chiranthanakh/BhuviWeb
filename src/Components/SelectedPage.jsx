import React, { useState } from 'react';
import SearchBar from './SearchBar'
import CardLayout from './CardLayout';
import Laucher from './Laucher'; 

const PageSwitcher = () => {
  const [showProperty, setShowProperty] = useState(true);

  const handleButtonClick = (type) => {
    setShowProperty(type === 'property');
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="flex space-x-4">
        <button
          className={`text-black font-semibold px-6 py-2 rounded-full ${showProperty ? 'bg-yellow-500' : 'bg-transparent'}`}
          onClick={() => handleButtonClick('property')}>
          Property
        </button>
        <button
          className={`text-black font-semibold px-6 py-2 rounded-full ${!showProperty ? 'bg-yellow-500' : 'bg-transparent'}`}
          onClick={() => handleButtonClick('construction')}>
          Construction
        </button>
      </div>

      <div className="mt-6 text-center">
        {showProperty ? (
          <> 
          <SearchBar />
          <CardLayout />
          <Laucher />
          </>
        ) : (
         <div className='m-20'>
           <p>This is the Construction section content.</p>
         </div>
        )}
      </div>
    </div>
  );
};

export default PageSwitcher;
