"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaSyringe, FaSmile, FaCheckCircle } from "react-icons/fa";
import DemandeDevis from "../../components/RequestForm";

const ImplantDentairePage = () => {
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
          Implant Dentaire: Une Solution Durable et Esthétique
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Retrouvez le sourire et une fonction masticatoire parfaite grâce aux implants dentaires, conçus pour remplacer efficacement vos dents manquantes.
        </p>
        <FaSmile className="text-4xl text-blue-500 mx-auto mb-6" />
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
            Partie de l&#39;implant dentaire : La racine artificielle
          </h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            La racine est un implant fait de titanium ou de zirconium qui est fixé sur l’os de la mâchoire lors d’une procédure chirurgicale sous anesthésie locale.
          </p>
          <ul className="space-y-3 mb-4 text-lg">
            <li>
              <FaTooth className="inline-block text-blue-500 mr-2" />
              Intégration parfaite grâce aux matériaux biocompatibles.
            </li>
            <li>
              <FaSyringe className="inline-block text-blue-500 mr-2" />
              Chirurgie rapide et peu invasive sous anesthésie locale.
            </li>
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Réduction des complications liées à la perte de dents.
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
            src="/images/3.png"
            alt="Implant dentaire"
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
            Deuxième Partie de l&#39;implant dentaire : La couronne dentaire
          </h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Une fois l’implant intégré, la couronne est fixée dessus. Cette dent artificielle imite parfaitement les autres dents pour une apparence naturelle.
          </p>
          <ul className="space-y-3 text-lg">
            <li>
              <FaTooth className="inline-block text-blue-500 mr-2" />
              Adaptation parfaite aux autres dents en termes de teinte et forme.
            </li>
            <li>
              <FaCheckCircle className="inline-block text-blue-500 mr-2" />
              Fonction masticatoire restaurée.
            </li>
            <li>
              <FaSmile className="inline-block text-blue-500 mr-2" />
              Esthétique et durée de vie longue, pour un sourire parfait.
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
            src="/images/6.jpg"
            alt="Couronne dentaire"
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
          Les avantages des implants dentaires
        </h3>
        <div className="w-16 h-1 bg-blue-500 mb-8 mx-auto"></div>
        <p className="text-lg md:text-xl mb-4">
          Les implants dentaires offrent une solution robuste, esthétique et confortable pour remplacer les dents manquantes.
        </p>
        <ul className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-lg">
          <li className="flex items-center">
            <FaTooth className="text-blue-500 text-2xl mr-2" />
            Préservation de l&#39;os de la mâchoire
          </li>
          <li className="flex items-center">
            <FaSmile className="text-blue-500 text-2xl mr-2" />
            Apparence naturelle
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500 text-2xl mr-2" />
            Fonction masticatoire restaurée
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

export default ImplantDentairePage;
