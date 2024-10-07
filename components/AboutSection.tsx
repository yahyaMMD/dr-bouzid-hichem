"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dentist } from "../lib/Data";
import { useMemo } from "react";

const AboutSection = () => {
  // State to track the current image index for both About and Clinic
  const [currentImageIndexAbout, setCurrentImageIndexAbout] = useState(0);
  const [currentImageIndexClinic, setCurrentImageIndexClinic] = useState(0);

  // Ensure the images arrays are valid and not empty
  const aboutImages = useMemo(
    () => Dentist.aboutImages?.filter((img) => !!img) || [],
    []
  );

  const clinicImages = useMemo(
    () => Dentist.clinicImages?.filter((img) => !!img) || [],
    []
  );

  // Automatic image change for About section every 3 seconds
  useEffect(() => {
    if (aboutImages.length === 0) return;

    const intervalAbout = setInterval(() => {
      setCurrentImageIndexAbout(
        (prevIndex) => (prevIndex + 1) % aboutImages.length
      );
    }, 3000);

    return () => clearInterval(intervalAbout); // Clear the interval on unmount
  }, [aboutImages]);

  // Automatic image change for Clinic section every 3 seconds
  useEffect(() => {
    if (clinicImages.length === 0) return;

    const intervalClinic = setInterval(() => {
      setCurrentImageIndexClinic(
        (prevIndex) => (prevIndex + 1) % clinicImages.length
      );
    }, 3000);

    return () => clearInterval(intervalClinic); // Clear the interval on unmount
  }, [clinicImages]);

  // Function to handle manual image change for About section
  const handlePrevImageAbout = () => {
    setCurrentImageIndexAbout(
      (prevIndex) => (prevIndex - 1 + aboutImages.length) % aboutImages.length
    );
  };

  const handleNextImageAbout = () => {
    setCurrentImageIndexAbout(
      (prevIndex) => (prevIndex + 1) % aboutImages.length
    );
  };

  // Function to handle manual image change for Clinic section
  const handlePrevImageClinic = () => {
    setCurrentImageIndexClinic(
      (prevIndex) => (prevIndex - 1 + clinicImages.length) % clinicImages.length
    );
  };

  const handleNextImageClinic = () => {
    setCurrentImageIndexClinic(
      (prevIndex) => (prevIndex + 1) % clinicImages.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 md:px-8">
      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-36 gap-8 items-center mb-8 sm:mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
            About {Dentist.name}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Connu pour son grand savoir-faire, docteur bouzid hichem est un
            chirurgien-dentiste avec une expertise de plus de 20 ans. Il est
            réputé pour son travail minutieux et sa passion profonde pour la
            médecine dentaire..
          </p>

          <p className="text-gray-600 text-base md:text-lg">
            Avec des années d&#39;expérience, Dr. Bouzid Hichem est reconnu pour
            son approche personnalisée et ses résultats durables. Son expertise
            dans les technologies de pointe garantit à ses patients des
            traitements efficaces et confortables, pour un sourire éclatant et
            en parfaite santé.
          </p>

          <a
            href="/dr-bouzid"
            className="relative inline-block py-3 px-6 font-bold text-white bg-blue-500 rounded overflow-hidden group"
          >
            <span className="absolute inset-0 bg-black transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
            <span className="relative z-10">En savoir plus</span>
          </a>
        </div>

        {/* Image Carousel for About Section */}
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Left Arrow for About */}
          <button
            className="absolute left-4 z-10 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={handlePrevImageAbout}
            aria-label="Previous Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image Display for About */}
          <div className="relative w-full h-full">
            {aboutImages.length > 0 && (
              <Image
                src={aboutImages[currentImageIndexAbout]}
                alt={`About Image ${currentImageIndexAbout + 1}`}
                layout="fill"
                className="rounded-lg shadow-lg object-cover"
              />
            )}
          </div>

          {/* Right Arrow for About */}
          <button
            className="absolute right-4 z-10 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={handleNextImageAbout}
            aria-label="Next Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 19.5L15.75 12l-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Clinic Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-36 gap-8 items-center">
        {/* Image Carousel for Clinic Section */}
        <div className="relative w-full h-96 items-center justify-center hidden sm:flex">
          {/* Left Arrow for Clinic */}
          <button
            className="absolute left-4 z-10 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={handlePrevImageClinic}
            aria-label="Previous Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image Display for Clinic */}
          <div className="relative w-full h-full">
            {clinicImages.length > 0 && (
              <Image
                src={clinicImages[currentImageIndexClinic]}
                alt={`Clinic Image ${currentImageIndexClinic + 1}`}
                layout="fill"
                className="rounded-lg shadow-lg object-cover"
              />
            )}
          </div>

          {/* Right Arrow for Clinic */}
          <button
            className="absolute right-4 z-10 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={handleNextImageClinic}
            aria-label="Next Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 19.5L15.75 12l-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
            Clinique Smile Dentaire
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            La Clinique Smile Dentaire, dirigée par Dr. Bouzid Hichem, est un
            centre moderne dédié à des soins dentaires de haute qualité. Équipée
            des dernières technologies, la clinique propose une large gamme de
            traitements, allant de l&#39;orthodontie à l&#39;esthétique
            dentaire, dans un cadre confortable et professionnel. Chaque patient
            y bénéficie d&#39;une approche personnalisée pour des résultats
            optimaux.
          </p>

          <a
            href="/dr-bouzid"
            className="relative inline-block py-3 px-6 font-bold text-white bg-blue-500 rounded overflow-hidden group"
          >
            <span className="absolute inset-0 bg-black transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
            <span className="relative z-10">En savoir plus sur nous</span>
          </a>
        </div>

        <div className="relative w-full h-96 items-center justify-center sm:hidden flex">
          {/* Left Arrow for Clinic */}
          <button
            className="absolute left-4 z-10 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={handlePrevImageClinic}
            aria-label="Previous Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image Display for Clinic */}
          <div className="relative w-full h-64">
            {clinicImages.length > 0 && (
              <Image
                src={clinicImages[currentImageIndexClinic]}
                alt={`Clinic Image ${currentImageIndexClinic + 1}`}
                layout="fill"
                className="rounded-lg shadow-lg object-contain"
              />
            )}
          </div>

          {/* Right Arrow for Clinic */}
          <button
            className="absolute right-4 z-10 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={handleNextImageClinic}
            aria-label="Next Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 19.5L15.75 12l-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
