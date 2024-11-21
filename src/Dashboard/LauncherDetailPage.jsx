import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header'; 

const LauncherDetailPage = () => {
  const { id } = useParams();

  const launcherData = [
    {
      id: '1',
      title: 'Binary Temple Tree',
      developer: 'Binary Realty',
      location: 'Sarjapur Road, Bangalore',
      config: '3 BHK Flats',
      price: '₹1.20 Cr onwards',
      marketer: 'Marketed by Binary Realty',
      description: 'Binary Temple Tree offers luxurious 3 BHK flats with spacious layouts and modern amenities, located in the prime area of Sarjapur Road.',
      features: ['Swimming Pool', 'Gym', 'Childrens Play Area', '24x7 Security'],
      imgSrc: '/images/launcher1.jpg', 
    },
    {
      id: '2',
      title: 'DSR Green Waters',
      developer: 'DSR Infrastructure Pvt Ltd',
      location: 'Sarjapur Road, Bangalore',
      config: '2, 3 BHK Flats',
      price: '₹84.3 Lac onwards',
      marketer: 'Marketed by DSR Infrastructure Pvt Ltd',
      description: 'DSR Green Waters provides affordable luxury with 2 and 3 BHK flats, nestled amidst green surroundings on Sarjapur Road.',
      features: ['Clubhouse', 'Jogging Track', 'Landscape Garden', 'Power Backup'],
      imgSrc: '/images/launcher2.jpg',
    },
    {
      id: '3',
      title: 'DSR The Greens',
      developer: 'DSR Infrastructure Pvt. Ltd.',
      location: 'Sarjapur Road, Bangalore',
      config: '2, 3 BHK Flats',
      price: '₹97.6 Lac onwards',
      marketer: 'Marketed by DSR Infrastructure Pvt. Ltd.',
      description: 'DSR The Greens is an eco-friendly residential project offering 2 and 3 BHK flats, close to IT hubs and schools on Sarjapur Road.',
      features: ['Rainwater Harvesting', 'Solar Power', 'Multipurpose Hall', '24/7 Water Supply'],
      imgSrc: '/images/launcher3.jpg',
    },
  ];

  const item = launcherData.find((launcher) => launcher.id === id);

  return (
    <div>
       <Header />
     <div className="p-5">
      {item ? (
        <>
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <img src={item.imgSrc} alt={item.title} className="w-full md:w-1/2 h-64 md:h-80 lg:h-96 object-cover rounded-lg mb-4 md:mb-0" />
          <p className="text-gray-700 mt-2"><b>Developer:</b> {item.developer}</p>
          <p className="text-gray-700"><b>Location:</b> {item.location}</p>
          <p className="text-gray-700"><b>Configuration:</b> {item.config}</p>
          <p className="text-gray-700"><b>Price:</b> {item.price}</p>
          <p className="text-gray-700"><b>Marketer:</b> {item.marketer}</p>
          <p className="mt-4 text-gray-600">{item.description}</p>

          <h3 className="text-xl mt-4 font-semibold">Features:</h3>
          <ul className="list-disc list-inside mt-2">
            {item.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-700">No details available for this item.</p>
      )}
    </div>
  </div>
  );
};

export default LauncherDetailPage;
