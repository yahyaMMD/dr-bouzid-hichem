"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // For advanced animations
import {
  FaTooth,
  FaTeethOpen,
  FaTeeth,
  FaSmile,
  FaClock,
  FaCertificate,
} from "react-icons/fa";
import Image from "next/image";

const serviceData = [
  {
    id: 1,
    link: "/couronne-zircon-ceramique",
    icon: <FaTooth />,
    title: "Couronne en zircon et céramique",
    content:
      "Les couronnes dentaires sont des restaurations prothétiques utilisées pour restaurer la forme, la taille, et la fonction des dents endommagées. Parmi les matériaux les plus populaires pour les couronnes dentaires, la zircone et la céramique occupent une place prépondérante en raison de leurs propriétés esthétiques et mécaniques",
    image: "/images/zircon-ceramic1.jpg", // Example image path
  },
  {
    id: 2,
    link: "/implant-dentaire",
    icon: <FaTeethOpen />,
    title: "Implants dentaires",
    content:
      "La racine est un implant fait de titanium ou de zirconium qui est fixé sur l’os de la mâchoire lors d’une petite procédure chirurgicale sous anesthésie locale.Sa composition en biomatériaux assure son intégration parfaite et sa capacité de remplacer efficacement la dent et empêcher les désagréments et complications liées à l’édentation. Après la pose de l’implant, il faudra respecter une période d’ostéointégration qui est le temps nécessaire à l’adaptation et à la cicatrisation de l’implant et son intégration harmonieuse aux structures osseuses.",
    image: "/images/3.png",
  },
  {
    id: 3,
    link: "/orthodontie-dentaire",
    icon: <FaClock />,
    title: "Orthodontie",
    content:
      "Parmi les options thérapeutiques, il existe les classiques appareils dentaires qui utilisent des bagues sur chaque dent, reliées par un fil métallique qui serre progressivement les dents pour les aligner. Un autre type d’appareils dentaires fabriqué à partir de céramique fonctionne avec le même principe mais il est beaucoup moins visible car fait de matériaux de la même couleur que celle des dents.",
    image: "/images/4.png",
  },
  {
    id: 4,
    link: "/prothese-dentaire",
    icon: <FaTeeth />,
    title: "Prothèse dentaire",
    content:
      "Lorsque la perte de dent est complète, ou que la dent sous-jacente est trop abimée pour être gardée, on ne peut se contenter de placer une couronne simple. Il faut utiliser un pilier artificiel : l’implant dentaire. L’implant dentaire s’amarre sur l’os de la mâchoire pour servir de support à la couronne. Le dispositif de remplacement est donc constitué d’une partie visible qui est la couronne dentaire et d’une autre partie invisible qui est l’implant dentaire",
    image: "/images/5.png",
  },
  {
    id: 5,
    link: "/gouttiere-dentaire",
    icon: <FaCertificate />,
    title: "Gouttières dentaires invisibles",
    content:
      "Comme leur nom l’indique, ce sont des gouttières transparentes qui sont appliquées sur le dents afin de corriger le mal-alignement dentaire. Leur forme et leur taille sont ajustées grâce à un appareil numérique ultrasophistiqué pour vous proposer un produit sur mesure qui épouse parfaitement les contours de vos dents. Elles corrigent progressivement les déformations dentaires et peuvent être retirées très facilement pendant les repas ou le brossage des dents.Grace à leur facilité d’utilisation et à leur grande discrétion, les gouttières constituent la procédure idéale pour les adultes qui souhaitent réparer leurs dents sans gâter leur sourire. Grâce à ces petites merveilles de technologie, votre sourire sera à jamais changé ainsi que votre vie sociale et professionnelle.",
    image: "/images/2.png",
  },
  {
    id: 6,
    link: "/Facettes-dentaires",
    icon: <FaSmile />,
    title: "Facette dentaire",
    content:
      "Les facettes dentaires sont de minces revêtements en porcelaine ou en résine composite, collés à la surface avant des dents à l&#39;aide de ciment dentaire pour camoufler de façon permanente les imperfections dentaires, telles que les fissures, les mal alignements et les décolorations.",
    image: "/images/11.png",
  },
];
export default function EnhancedDentalSection() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedService, setSelectedService] = useState(serviceData[0]);

  const handleServiceClick = (id: any) => {
    setSelectedServiceId(id === selectedServiceId ? null : id); // Toggle content visibility
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl text-blue-500 font-bold my-8">
        Our Services
      </h1>

      <div className="hidden md:flex justify-between w-full items-center">
        {serviceData.map((service) => (
          <motion.div
            key={service.id}
            className={`cursor-pointer text-center items-center justify-center flex flex-col ${
              selectedService.id === service.id
                ? "text-blue-600"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedService(service)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="text-6xl mb-2" whileHover={{ rotate: 10 }}>
              {service.icon}
            </motion.div>
            <p className="font-medium">{service.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-8 p-4 bg-white rounded-lg shadow-lg  flex-col md:flex-row items-center justify-center hidden sm:flex">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          key={selectedService.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={selectedService.image}
            alt={selectedService.title}
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover h-64 w-full md:w-80"
          />
        </motion.div>

        {/* Service Details */}
        <motion.div
          className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-3xl font-bold text-blue-600">
            {selectedService.title}
          </h2>
          <p className="my-4 text-gray-700">{selectedService.content}</p>

          <motion.a
            className=" bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={selectedService.link}>Learn More</a>
          </motion.a>
        </motion.div>
      </div>

      {/* Icons and Dynamic Content */}
      <div className="w-full flex flex-col sm:hidden">
        {serviceData.map((service) => (
          <div key={service.id} className="mb-6">
            {/* Icon */}
            <motion.div
              className={`cursor-pointer text-center items-center justify-center flex flex-col ${
                selectedServiceId === service.id
                  ? "text-blue-600"
                  : "text-gray-400"
              }`}
              onClick={() => handleServiceClick(service.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="text-6xl mb-2" whileHover={{ rotate: 10 }}>
                {service.icon}
              </motion.div>
              <p className="font-medium text-lg">{service.title}</p>
            </motion.div>

            {/* Dynamic Content Section */}
            {selectedServiceId === service.id && (
              <motion.div
                className="mt-4 p-4 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg object-cover h-64 w-full md:w-80"
                    width={400}
                    height={300}
                  />
                </div>

                {/* Service Details */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-blue-600">
                    {service.title}
                  </h2>
                  <p className="my-4 text-gray-700">{service.content}</p>
                  <motion.a
                    className=" bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={service.link}>Learn More</a>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
