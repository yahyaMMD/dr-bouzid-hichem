"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSmile, FaTooth, FaCertificate } from "react-icons/fa";
import DemandeDevis from "../../components/RequestForm";

const page = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      {/* Introduction Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Transformez votre sourire avec les Facettes Dentaires
          </h2>
          <p className="text-lg md:text-xl mb-4 text-center">
            Votre sourire est la première façade qui habille votre visage, mais
            il arrive que l&#39;une de vos dents ternissent son aspect. Des
            années à boire du café, à fumer ou à manger des aliments pigmentés
            peuvent ternir vos dents.
          </p>
          <p className="text-lg md:text-xl mb-8 text-center">
            Si vos dents manquent de blancheur ou sont endommagées, les facettes
            dentaires et le célèbre Hollywood Smile peuvent vous offrir un sourire éclatant et confiant.
          </p>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Left side: Text content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Qu&#39;est-ce que les facettes dentaires ?
          </h3>
          <div className="w-16 h-1 bg-blue-400 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Les facettes dentaires sont de minces revêtements en porcelaine ou
            résine composite, appliquées à la surface de vos dents pour corriger
            les imperfections comme les fissures, les mal-alignements ou les
            décolorations.
          </p>
          <p className="text-lg md:text-xl mb-4">
            Elles offrent une solution discrète et esthétique, vous garantissant
            un sourire durable, résistant aux taches et aux décolorations.
          </p>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>Résistantes aux taches</li>
            <li>Procédé rapide et indolore</li>
            <li>Personnalisation sur mesure</li>
            <li>Résultats immédiats et spectaculaires</li>
          </ul>
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
            src="/images/veneers.png"
            alt="Facettes dentaires"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Hollywood Smile Section */}
      <motion.div
        className="my-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Qu&#39;est-ce que le Hollywood Smile ?
        </h3>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-center mb-8">
          Le Hollywood Smile est une procédure complète de transformation
          esthétique des dents qui inclut généralement les facettes dentaires,
          des traitements de blanchiment et un réalignement pour vous offrir un
          sourire digne des stars hollywoodiennes.
        </p>
        <div className="flex justify-center space-x-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <FaSmile className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-semibold">Sourire Impeccable</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <FaTooth className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-semibold">Alignement Parfait</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <FaCertificate className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-semibold">Résultat Garanti</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="my-8 sm:my-16">
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

      {/* Additional Images and Certifications Section */}
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 max-w-screen-xl w-full">
          {/* Left Side - Images */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/hollywood-smile-1.jpg"
                alt="Transformation Hollywood Smile"
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          </div>

          {/* Right Side - Logos & Certifications */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-3/4 md:w-full lg:w-3/4"
            >
              <img
                src="/images/pd10.png"
                alt="Certification Facettes"
                className="w-full"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-3/4 md:w-full lg:w-3/4"
            >
              <img
                src="/images/pd11.png"
                alt="Dentist Accreditation"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <DemandeDevis/>

    </section>
  );
};

export default page;
