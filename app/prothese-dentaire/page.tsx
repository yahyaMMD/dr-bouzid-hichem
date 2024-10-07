"use client";

import React from "react";
import { motion } from "framer-motion";
import DemandeDevis from "../../components/RequestForm";

const page = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      {/* First Section: Content Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-12">
        {/* Left side: Text content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            La couronne dentaire :
          </h3>
          <div className="w-16 h-1 bg-gray-400 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Lorsque les fonctions physiologiques et esthétiques de la dent sont
            compromises, mais que celle-ci n’est pas trop abimée, elle peut être
            maintenue en place pour être utilisée comme support sur lequel est
            fixée une prothèse dentaire qui assure ses fonctions tout en
            respectant la teinte naturelle afin de se fondre au milieu des
            autres dents.
          </p>
          <p className="text-lg md:text-xl mb-4">
            L’implant dentaire s’amarre sur l’os de la mâchoire pour servir de
            support à la couronne.{" "}
          </p>
          <p className="text-lg md:text-xl">
            Le dispositif de remplacement est donc constitué d’une partie
            visible qui est la couronne dentaire et d’une autre partie invisible
            qui est l’implant dentaire.
          </p>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pl-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/7.png"
            alt="Facettes dentaires"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Second Section: Image Left, Content Right */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center text-center md:text-left mb-12">
        {/* Right side: Text content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Le Bridge :</h3>
          <div className="w-16 h-1 bg-gray-400 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Voulant littéralement dire « pont » en anglais, ce type de prothèses
            fait office de véritable pont reliant deux dents qu’il utilise comme
            piliers avec une ou plusieurs fausses dents entre les deux.
          </p>
          <p className="text-lg md:text-xl mb-4">
            Ce type de traitement est idéal pour remplacer plusieurs dents
            adjacentes perdues ou trop abimées.
          </p>
        </motion.div>

        {/* Left side: Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pr-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/8.png"
            alt="Facettes dentaires"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      <div className="flex  items-center justify-center text-center md:text-left ">
        {/* Right side: Text content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            La couronne dentaire :
          </h3>
          <div className="w-16 h-1 bg-gray-400 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Lorsque les fonctions physiologiques et esthétiques de la dent sont
            compromises, mais que celle-ci n’est pas trop abimée, elle peut être
            maintenue en place pour être utilisée comme support sur lequel est
            fixée une prothèse dentaire qui assure ses fonctions tout en
            respectant la teinte naturelle afin de se fondre au milieu des
            autres dents.
          </p>
        </motion.div>

        {/* Left side: Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pr-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/9.png"
            alt="Facettes dentaires"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Call-to-Action Button */}
      

      <div className="flex flex-col justify-center items-center my-6">
        <p className="text-2xl md:text-3xl font-bold mb-4">Prothèses dentaires amovibles</p>
        <div className="flex flex-col sm:flex-row justify-center  gap-6 font-semibold text-[18px]">
          <p>
            Les prothèses dentaires amovibles remplacent une ou plusieurs dents
            manquantes en ayant comme support la gencive ou les structures
            dentaires adjacentes. En conséquence, elles peuvent être retirées à
            tout moment par le patient.
          </p>
          <p>
            Ces prothèses dentaires reposent sur une base faite de résine de la
            même couleur que celle de la gencive. Elles sont donc simples,
            faciles à manier et permettent surtout au patient de les retirer à
            tout moment afin d’effectuer les différents gestes d’entretien ou
            encore pour dormir confortablement.
          </p>
        </div>

        <div className="relative w-[90%] sm:w-[70%]">
            <img
                src="/images/10.png"
                alt="Facettes dentaires"
                className="rounded-lg shadow-lg object-cover"
            />
        </div>

        <div>
        <div className="items-center justify-center self-center flex">
          <a
            href="/appointment"
            className="relative flex w-[280px] py-3 px-4 mx-auto sm:mx-0 mt-12 font-bold text-white bg-blue-500 rounded-full overflow-hidden group opacity-0 animate-fadeIn delay-1000"
          >
            <span className="absolute inset-0 bg-black transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 "></span>
            <span className="relative z-10 rounded-full">
              RÉSERVEZ VOTRE RENDEZ-VOUS
            </span>
          </a>
        </div>
      </div>
      </div>
      <DemandeDevis />
    </section>
  );
};

export default page;
