import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Sites = () => {
  const [showLands, setShowLands] = useState(true); 

  const handleButtonClick = (type) => {
    setShowLands(type === 'lands');
  };

  return (
    <div className="font-sans">
      <Header />
      <div className="flex border rounded-full h-13 gap-0 w-48 p-2.5 my-4 mx-16">
        <button 
            className={`py-2 px-6 my-0 mx-0 text-black rounded-full ${showLands ? 'bg-yellow-500' : 'bg-transparent'} `} 
            onClick={() => handleButtonClick('lands')}> Lands 
        </button>
        <button 
          className={`py-2 px-6 my-0 mx-0 text-black rounded-full ${!showLands ? 'bg-yellow-500' : 'bg-transparent'}`} 
          onClick={() => handleButtonClick('plot')}> Plot
        </button>
      </div>
      <div className="p-4 mx-16">
        <input 
          type="text" 
          placeholder="Ex:vikaradbad,chevalla" 
          className="w-5/6 p-2 rounded-lg border focus:outline-none"/>
        <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400">
         Filter</button>
      </div>
      <div className="flex p-5 mx-16 gap-5 w-72">
        <button className="shadow p-2 rounded-lg flex-1">Karnataka</button>
        <button className="shadow p-2 rounded-lg flex-1">Facilitated</button>
        <button className="shadow p-2 rounded-lg flex-1">Owner</button>
        <button className="shadow p-2 rounded-lg flex-1">Highway Facing</button>
      </div>
      <div className="flex justify-between items-center px-4 py-2 mx-16">
        <h4 className="text-lg">{showLands ? '4 lands' : '0 plots'}</h4>
        <div>
          <select className="p-2 ml-16 rounded-lg border bg-gray-100">
            <option>Uploaded Load (Latest)</option>
            <option>Price per Acre (low to high)</option>
            <option>Price per Acre (high to low)</option>
            <option>Total Land Size (low to high)</option>
            <option>Total Land Size (high to low)</option>
            <option>Total Land Price (low to high)</option>
            <option>Total Land Price (high to low)</option>
          </select>
        </div>
      </div>
      
      {showLands ? (
        <div className="grid gap-8 mt-4 mx-16 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 rounded-lg shadow hover:scale-105 transition-transform">
            <img src='/images/image1.webp' alt="Card 1" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <b>₹ 8 Cr /acre • 3 Acres</b>
              <p>BHATKAL, UTTAR KANNADA (dt)</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow hover:scale-105 transition-transform">
            <img src='/images/image2.jpg' alt="Card 2" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <b>₹ 48 lakhs /acre • 4 Acres</b>
              <p>KALABURAGI, KALABURAGI (dt)</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow hover:scale-105 transition-transform">
            <img src='/images/image3.webp' alt="Card 3" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <b>₹ 23 lakhs /acre • 16 Acres</b>
              <p>AFZALPUR, KALABURAGI (dt)</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow hover:scale-105 transition-transform">
            <img src='/images/image4.webp' alt="Card 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <b>₹ 32 lakhs /acre • 6 Acres</b>
              <p>KORATAGERE, TUMAKURU (dt)</p>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      ) }
      
      <div className="p-4 border-2 rounded-lg mx-auto my-4 w-fit">
        <p>We are working on adding more plots for you to explore</p>
      </div>
      
      <div className="bg-yellow-400 p-4 border-2 rounded-lg mx-auto my-4 w-fit text-center">
        <span>Views Agents</span>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sites;
