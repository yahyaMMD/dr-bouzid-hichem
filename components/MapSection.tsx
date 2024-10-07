import React from 'react';
import Map from '../components/Map';

const MapSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      <header className="bg-black text-white py-4 flex justify-between items-center">
        <div className="ml-4 text-3xl font-bold">
          <span className="text-gray-300">α</span> Dental
        </div>
        <div className="mr-4 flex space-x-4">
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">A propos</a>
          <a href="#" className="hover:text-gray-400">Galerie</a>
        </div>
      </header>

      {/* Map section */}
      <section className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="w-full md:w-2/3">
          <Map />
        </div>
      </section>

      {/* Language and Footer section */}
      <footer className="bg-black text-white mt-8 py-4 flex justify-between items-center px-4">
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-2 py-1 rounded">العربية</button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded">English</button>
        </div>
        <div className="text-sm">
          Cabinet dentaire Alpha Dental
        </div>
      </footer>
    </div>
  );
};

export default MapSection;
