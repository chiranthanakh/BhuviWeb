import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header'; 

const cardDetails = {
  1: {
    title: '3 BHK Flat',
    price: '₹1.85 Cr',
    location: 'Tumkur Road, Bangalore',
    description: 'Spacious 3 BHK flat located in Tumkur Road with modern amenities.',
    imgSrc: '/images/card1 image.jpg',
  },
  2: {
    title: '2 BHK Flat',
    price: '₹89 Lac',
    location: 'Bangalore Main Road, Bangalore',
    description: 'Cozy 2 BHK flat on Bangalore Main Road, great connectivity and facilities.',
    imgSrc: '/images/card2 image.jpg',
  },
  3: {
    title: '3 BHK Flat',
    price: '₹3.24 Cr',
    location: 'Block 2nd JayaNagar East, Bangalore',
    description: 'Luxury 3 BHK flat in JayaNagar East, with premium interiors and amenities.',
    imgSrc: '/images/card3 image.jpg',
  },
  4: {
    title: '2 BHK Flat',
    price: '₹2.50 Cr',
    location: 'Whitefield, Bangalore',
    description: 'Elegant 2 BHK flat in Whitefield, surrounded by greenery and peaceful surroundings.',
    imgSrc: '/images/card4 image.jpg',
  },
};

const DetailPage = () => {
  const { id } = useParams();
  const card = cardDetails[id];

  if (!card) {
    return <p>Details not available for this property.</p>;
  }

  return (
    <div>
      <Header />
     <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">{card.title}</h1>
        <img 
          src={card.imgSrc} 
          alt={card.title} 
          className="w-full md:w-1/2 h-64 md:h-80 lg:h-96 object-cover rounded-lg mb-4 md:mb-0"
        />      
          <p className="text-gray-700 mt-4"><b>Price:</b>{card.price}</p>
          <p className="text-gray-700"><b>Location:</b> {card.location}</p>
          <p className="text-gray-600">{card.description}</p>
     </div>
    </div>
  );
};

export default DetailPage;
