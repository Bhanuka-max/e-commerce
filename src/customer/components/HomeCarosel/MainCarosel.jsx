import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// Import the named export 'MainPageData' from the local data file
import { MainPageData } from './MainPageData'; 

const MainCarosel = () => {
  
  // This line is now safe because MainPageData is properly imported as an array.
  const items = MainPageData.map((item, index) => (
    // It's crucial to add a unique 'key' when mapping elements in React
    <img 
      key={index} // Using index as key since no unique ID is available in the data
      className='cursor-pointer w-full h-auto object-cover' 
      role='presentation' 
      src={item.image} 
      alt={`Carousel Item ${index + 1}`} 
      // Optional: Add styling to ensure the images fit well in the carousel
      style={{ minHeight: '300px', maxHeight: '500px' }}
    />
  ));

  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div className="p-4 shadow-lg rounded-xl bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-pink-600">Featured Bouquets</h2>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableDotsControls
      />
    </div>
  );
}

export default MainCarosel;