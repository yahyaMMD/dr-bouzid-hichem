"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      <div>
        <p className="text-lg md:text-xl mb-4 text-center">
          Votre sourire est la première façade qui habille votre visage, mais il
          arrive que l&#39;une de vos dents ternissent son aspect. Des années à
          boire du café, à fumer des cigarettes ou à manger des aliments
          hautement pigmentés peuvent éventuellement faire des ravages sur vos
          dents, les teintant de nuances de jaune ou de brun peu attrayantes.
        </p>
        <p className="text-lg md:text-xl mb-8 text-center">
          Si tel est votre cas, pas de panique ! Cette situation est
          l&#39;indication préférentielle des facettes dentaires et du Hollywood
          smile.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Left side: Text content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Qu&#39;est-ce que les facettes dentaires & Hollywood smile ?
          </h3>
          <div className="w-16 h-1 bg-gray-400 mb-4"></div>
          <p className="text-lg md:text-xl mb-4">
            Les facettes dentaires sont de minces revêtements en porcelaine ou
            en résine composite, collés à la surface avant des dents à
            l&#39;aide de ciment dentaire pour camoufler de façon permanente les
            imperfections dentaires, telles que les fissures, les mal
            alignements et les décolorations.
          </p>
          <p className="text-lg md:text-xl">
            Si vous recherchez un moyen simple de blanchir votre sourire pour de
            bon, les facettes dentaires peuvent vous convenir parfaitement. En
            plus elles sont résistantes aux taches, vous n’aurez donc plus
            jamais à vous soucier de la décoloration.
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
            src="/images/1.png"
            alt="Facettes dentaires"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      <div className="my-8 sm:my-16">
        <p className="text-lg md:text-2xl mb-4 text-center ">
          Notre cabinet dentaire Alpha Dental est le numéro 1 en Algérie et en
          Afrique. Et l’ambassadeur et représentant officiel et exclusif de la
          marque de facettes dentaires NNN Veneers.
        </p>
        <p className="text-lg md:text-xl mb-4 text-center">
          Ces facettes dentaires de dernière génération sont à la pointe de la
          technologie puisque, contrairement aux restes des facettes, elles sont
          posées sans préparation, sans douleur et sans injection{" "}
        </p>
        <p className="text-lg md:text-xl  text-center">
        Vos dents seront entre les mains expertes du docteur DOUKANI, reconnu internationalement pour son travail impeccable, qui lui a valu d’avoir la confiance des meilleurs au monde.
        </p>
        
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

      <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 max-w-screen-xl w-full">
        {/* Left Side - Two Stacked Images */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/images/certificate1.jpg" // Replace with your image path
              alt="Person with Certificate"
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>

          
        </div>

        {/* Right Side - Logos */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-6">
          {/* Veneers Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-3/4 md:w-full lg:w-3/4"
          >
            <img
              src="/images/certificate2.jpg" // Replace with your veneers logo
              alt="Veneers Logo"
              className="w-full"
            />
          </motion.div>

          {/* Gold Badge */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-3/4 md:w-full lg:w-3/4"
          >
            <img
              src="/images/certificate3.jpg" // Replace with your gold badge image
              alt="Gold Badge"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default page;
