"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaSmile, FaCheckCircle, FaEyeSlash, FaGrinStars, FaLaptopMedical } from "react-icons/fa";
import DemandeDevis from "../../components/RequestForm";

const GouttiereDentairePage = () => {
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
          Gouttières Dentaires Invisibles: Alignez Votre Sourire en Toute Discrétion
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Découvrez les gouttières dentaires invisibles, la solution moderne et discrète pour redresser vos dents sans compromettre votre sourire.
        </p>
        <FaGrinStars className="text-4xl text-blue-500 mx-auto mb-6" />
      </motion.div>

      {/* Section: Benefits and Features */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-12">
        
        {/* Left Side: Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pourquoi Choisir les Gouttières Invisibles ?
          </h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Les gouttières dentaires invisibles sont des solutions sur mesure, conçues pour corriger les mal-alignements dentaires tout en restant totalement discrètes. 
          </p>
          <ul className="space-y-3 text-lg mb-4">
            <li>
              <FaEyeSlash className="inline-block text-blue-500 mr-2" />
              Discrétion totale : invisibles aux yeux de tous.
            </li>
            <li>
              <FaSmile className="inline-block text-blue-500 mr-2" />
              Confort et praticité : faciles à retirer pour manger et se brosser les dents.
            </li>
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Résultats progressifs et durables.
            </li>
          </ul>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pl-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/2.png"
            alt="Gouttière dentaire invisible"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* How it Works Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left mb-12">
        
        {/* Right Side: Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Comment Fonctionnent les Gouttières Invisibles ?
          </h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Grâce à des technologies de pointe, vos gouttières sont fabriquées sur mesure en utilisant des scanners numériques 3D de vos dents. Ces gouttières transparentes repositionnent progressivement vos dents à leur place.
          </p>
          <ul className="space-y-3 text-lg mb-4">
            <li>
              <FaLaptopMedical className="inline-block text-blue-500 mr-2" />
              Scans numériques pour un ajustement parfait.
            </li>
            <li>
              <FaTooth className="inline-block text-blue-500 mr-2" />
              Ajustements continus pour un alignement optimal.
            </li>
          </ul>
        </motion.div>

        {/* Left Side: Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pr-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/digital-scan.jpg"
            alt="Scan numérique dentaire"
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
          Les Avantages des Gouttières Invisibles
        </h3>
        <div className="w-16 h-1 bg-blue-500 mb-8 mx-auto"></div>
        <p className="text-lg md:text-xl mb-4">
          Avec les gouttières dentaires invisibles, vous bénéficiez d&#39;une solution discrète et efficace pour obtenir le sourire dont vous rêvez.
        </p>
        <ul className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-lg">
          <li className="flex items-center">
            <FaSmile className="text-blue-500 text-2xl mr-2" />
            Esthétique améliorée
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500 text-2xl mr-2" />
            Confort et praticité
          </li>
          <li className="flex items-center">
            <FaGrinStars className="text-blue-500 text-2xl mr-2" />
            Résultats progressifs sans douleur
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
            <span className="relative z-10">RÉSERVEZ VOTRE RENDEZ-VOUS</span>
          </a>
        </div>
      </motion.div>

      <DemandeDevis />
    </section>
  );
};

export default GouttiereDentairePage;
