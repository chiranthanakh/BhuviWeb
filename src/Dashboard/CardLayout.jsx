import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="grid grid-cols-auto-fill gap-1 p-5">
      <h4 className="col-span-full text-left text-2xl ml-5">Layout</h4>
      <div className="flex gap-8 p-5 overflow-x-auto scrollbar-hide">
        {[
          { id: 1, imgSrc: '/images/card1 image.jpg', title: '3 BHK Flat', price: '₹1.85 Cr', location: 'Tumkur Road, Bangalore' },
          { id: 2, imgSrc: '/images/card2 image.jpg', title: '2 BHK Flat', price: '₹89 Lac', location: 'Bangalore Main Road, Bangalore' },
          { id: 3, imgSrc: '/images/card3 image.jpg', title: '3 BHK Flat', price: '₹3.24 Cr', location: 'Block 2nd JayaNagar East, Bangalore' },
          { id: 4, imgSrc: '/images/card4 image.jpg', title: '2 BHK Flat', price: '₹2.50 Cr', location: 'Whitefield, Bangalore' },
        ].map((card) => (
          <div
            key={card.id}
            className="bg-transparent p-0 text-center rounded-lg hover:shadow-md min-w-[400px] transition-shadow duration-300"
          >
            <Link to={`/detail/${card.id}`}>
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={card.imgSrc}
                  alt={`Card ${card.id}`}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4 text-left">
              <p>{card.title}</p>
              <b>{card.price}</b>
              <p>{card.location}</p>
              <p>Ready to Move</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
