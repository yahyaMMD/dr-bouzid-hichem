"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaRegSmileBeam, FaCheckCircle } from "react-icons/fa";
import DemandeDevis from "../../components/RequestForm";

const ZirconCeramicCrownPage = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      {/* Introduction */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Couronne en Zircon et Céramique
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Redonnez à vos dents toute leur splendeur avec les couronnes en zircon
          et céramique, une solution esthétique et durable.
        </p>
      </motion.div>

      {/* Service Details */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-16">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Qu&#39;est-ce qu&#39;une Couronne en Zircon et Céramique ?
          </h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Les couronnes en zircon et céramique sont des prothèses dentaires
            qui recouvrent entièrement une dent endommagée ou inesthétique. Le
            zircon offre une solidité extrême tandis que la céramique imite
            parfaitement l&#39;émail naturel des dents, pour une esthétique
            optimale.
          </p>
          <ul className="text-lg md:text-xl mb-4 space-y-3">
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Résistance exceptionnelle du zircon
            </li>
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Esthétique naturelle grâce à la céramique
            </li>
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Biocompatible et non irritant pour les gencives
            </li>
          </ul>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/zircon-ceramic1.jpg"
            alt="Couronne en zircon et céramique"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Pourquoi choisir une Couronne en Zircon et Céramique ?
        </h3>
        <div className="w-16 h-1 bg-blue-500 mb-8 mx-auto"></div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg md:text-xl mb-4">
              Les couronnes en zircon et céramique combinent solidité,
              esthétique, et confort. Elles sont parfaites pour restaurer les
              dents postérieures ou antérieures, avec une transparence naturelle
              qui se fond parfaitement avec vos dents.
            </p>
            <ul className="space-y-3">
              <li>
                <FaTooth className="inline-block text-blue-500 mr-2" />
                Préservation de l&#39;alignement et de la fonction masticatoire.
              </li>
              <li>
                <FaTooth className="inline-block text-blue-500 mr-2" />
                Une apparence esthétique inégalée, sans métaux visibles.
              </li>
              <li>
                <FaTooth className="inline-block text-blue-500 mr-2" />
                Résistance aux taches et à la décoloration.
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/zircon-ceramic2.jpg"
              alt="Dent en zircon et céramique"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Specialist Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
        {/* Image on the left */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/dr5.png"
            alt="Docteur spécialiste"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Text content on the right */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-xl text-center md:text-left">
            Chez Clinique Smile Dentaire, nos spécialistes sont formés aux dernières
            techniques pour poser des couronnes en zircon et céramique, offrant
            une précision et un confort inégalés.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="/appointment"
          className="relative flex w-[280px] py-3 px-4 mx-auto font-bold text-white bg-blue-500 rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 bg-black transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
          <span className="relative z-10">RÉSERVEZ VOTRE RENDEZ-VOUS</span>
        </a>
      </motion.div>

      <DemandeDevis />
    </section>
  );
};

export default ZirconCeramicCrownPage;
