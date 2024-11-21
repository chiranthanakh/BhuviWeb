import React from 'react';
import { Link } from 'react-router-dom';

const Laucher = () => {
  return (
    <div className="grid grid-cols-auto-fill gap-2 p-5">
      <h4 className="col-span-full text-left text-2xl ml-4">Launcher</h4>
      <div className="flex gap-8 p-5 overflow-x-auto scrollbar-hide">
        {[
          {
            id: 1,
            imgSrc: '/images/launcher1.jpg',
            title: 'Binary Temple Tree',
            developer: 'Binary Realty',
            location: 'Sarjapur Road, Bangalore',
            config: '3 BHK Flats',
            price: '₹1.20 Cr onwards',
            marketer: 'Marketed by Binary Realty',
          },
          {
            id: 2,
            imgSrc: '/images/launcher2.jpg',
            title: 'DSR Green Waters',
            developer: 'DSR Infrastructure Pvt Ltd',
            location: 'Sarjapur Road, Bangalore',
            config: '2, 3 BHK Flats',
            price: '₹84.3 Lac onwards',
            marketer: 'Marketed by DSR Infrastructure Pvt Ltd',
          },
          {
            id: 3,
            imgSrc: '/images/launcher3.jpg',
            title: 'DSR The Greens',
            developer: 'DSR Infrastructure Pvt. Ltd.',
            location: 'Sarjapur Road, Bangalore',
            config: '2, 3 BHK Flats',
            price: '₹97.6 Lac onwards',
            marketer: 'Marketed by DSR Infrastructure Pvt. Ltd.',
          },
        ].map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-0 text-center rounded-lg hover:shadow-md min-w-[400px] transition-shadow duration-300"
          >
            <Link to={`/launcher-detail/${item.id}`}>
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4 text-left">
              <b>{item.title}</b>
              <p>{item.developer}</p>
              <p>{item.location}</p>
              <p>{item.config}</p>
              <p>{item.price}</p>
              <p>{item.marketer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laucher;
