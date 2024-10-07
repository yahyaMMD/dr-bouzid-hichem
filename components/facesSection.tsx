import React from "react";

const DentalSection: React.FC = () => {
  return (
    <section className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-h-screen bg-black">
      {/* Top row (3 images, stacked on small devices) */}
      <img
        src="/images/face1.png"
        alt="face 1"
        className="object-cover w-full h-48 sm:h-full"
      />
      <img
        src="/images/face2.png"
        alt="face 2"
        className="object-cover w-full h-48 sm:h-full"
      />
      <img
        src="/images/face3.png"
        alt="face 3"
        className="object-cover w-full h-48 sm:h-full"
      />

      {/* Middle row (Image, Text Box, Image) */}
      <img
        src="/images/face4.png"
        alt="face 4"
        className="object-cover w-full h-48 sm:h-full"
      />
      <div className="flex items-center justify-center bg-gray-700 bg-opacity-90 text-white p-6 sm:p-8 text-center">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Un nouveau sourire, une nouvelle vie
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Découvrez nos traitements dentaires personnalisés
          </p>
          <div className="mt-6 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
            <a href="/galerie">Plus de traitements dentaires</a>
          </div>
        </div>
      </div>
      <img
        src="/images/face5.png"
        alt="face 5"
        className="object-cover w-full h-48 sm:h-full"
      />

      {/* Bottom row (3 images, stacked on small devices) */}
      <img
        src="/images/face6.png"
        alt="face 6"
        className="object-cover w-full h-48 sm:h-full"
      />
      <img
        src="/images/face7.png"
        alt="face 7"
        className="object-cover w-full h-48 sm:h-full"
      />
      <img
        src="/images/face8.png"
        alt="face 8"
        className="object-cover w-full h-48 sm:h-full"
      />
    </section>
  );
};

export default DentalSection;
