"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSmile, FaTooth, FaAlignCenter, FaCheckCircle } from "react-icons/fa";
import DemandeDevis from "../../components/RequestForm";

const OrthodontieDentairePage = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      
      {/* Introduction Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Orthodontie Dentaire : Pour un Sourire Aligné et Parfait
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Améliorez l&#39;alignement de vos dents et optimisez votre sourire avec des traitements orthodontiques adaptés à vos besoins.
        </p>
        <FaAlignCenter className="text-4xl text-blue-500 mx-auto mb-6" />
      </motion.div>

      {/* First Section: Content Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Redressez vos dents pour un sourire confiant
          </h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            L’orthodontie est une spécialité qui permet de corriger les malpositions dentaires et d’aligner parfaitement vos dents.
          </p>
          <ul className="space-y-3 mb-4 text-lg">
            <li>
              <FaAlignCenter className="inline-block text-blue-500 mr-2" />
              Alignement parfait des dents.
            </li>
            <li>
              <FaSmile className="inline-block text-blue-500 mr-2" />
              Amélioration de l’esthétique du sourire.
            </li>
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Optimisation de la fonction masticatoire.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pl-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/4.png"
            alt="Orthodontie"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Second Section: Image Left, Content Right */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center text-center md:text-left">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Appareils orthodontiques adaptés à chaque patient
          </h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Nous proposons divers types d&#39;appareils orthodontiques, que ce soit pour les enfants, les adolescents ou les adultes, incluant les appareils fixes et amovibles, ou encore les traitements invisibles comme les gouttières transparentes.
          </p>
          <ul className="space-y-3 text-lg">
            <li>
              <FaTooth className="inline-block text-blue-500 mr-2" />
              Appareils fixes pour un traitement traditionnel.
            </li>
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Gouttières invisibles pour un traitement discret.
            </li>
            <li>
              <FaSmile className="inline-block text-blue-500 mr-2" />
              Options sur mesure pour chaque patient.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pr-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/orthodontie2.jpg"
            alt="Appareils orthodontiques"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Benefits Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Les avantages de l&#39;orthodontie dentaire
        </h3>
        <div className="w-16 h-1 bg-blue-500 mb-8 mx-auto"></div>
        <p className="text-lg md:text-xl mb-4">
          Le traitement orthodontique offre de nombreux avantages, tant pour l&#39;apparence que pour la santé bucco-dentaire.
        </p>
        <ul className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-lg">
          <li className="flex items-center">
            <FaAlignCenter className="text-blue-500 text-2xl mr-2" />
            Amélioration de l&#39;alignement des dents
          </li>
          <li className="flex items-center">
            <FaSmile className="text-blue-500 text-2xl mr-2" />
            Amélioration de l&#39;esthétique du sourire
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500 text-2xl mr-2" />
            Meilleure fonction masticatoire et phonétique
          </li>
        </ul>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        className="my-8 sm:my-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center">
          <a
            href="/appointment"
            className="relative flex w-[280px] py-3 px-4 font-bold text-white bg-blue-500 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-black transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
            <span className="relative z-10">PRENDRE UN RENDEZ-VOUS</span>
          </a>
        </div>
      </motion.div>

      <DemandeDevis />
    </section>
  );
};

export default OrthodontieDentairePage;
