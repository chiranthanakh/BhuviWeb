import React, { useState } from 'react';
import { nav } from './Data'; 

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <ul className="flex justify-between items-center flex-wrap gap-1">
        {nav.map((item, index) => (
          <li 
            key={index} 
            className="relative flex-1 min-w-[30px] max-w-[200px] text-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.path} className="block text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
              {item.text}
            </a>
            {item.subItems && openIndex === index && (
              <ul className="absolute top-full left-0 bg-white shadow-lg w-full z-10">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                    <a href={subItem.path} className="block text-black">
                      {subItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
