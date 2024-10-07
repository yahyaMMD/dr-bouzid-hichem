// pages/about.tsx
"use client";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaTooth,
  FaSmile,
  FaCertificate,
  FaStar,
  FaUserMd,
  FaHandsHelping,
  FaHeartbeat,
  FaClock,
} from "react-icons/fa"; // Icônes supplémentaires
import DemandeDevis from "../../components/RequestForm";
import ExperienceSection from "../../components/ExperienceSection";

const AboutPage = () => {
  useEffect(() => {
    // Logique d'animation de défilement si nécessaire
  }, []);

  const certificates = [
    "/images/pd18.png",
    "/images/pd6.png",
    "/images/pd4.png",
    "/images/pd9.png",
    "/images/pd16.png",
    "/images/pd17.png",
    "/images/pd12.png",
    "/images/pd3.png",
    "/images/pd7.png",
    "/images/pd5.png",
    "/images/pd10.png",
    "/images/pd11.png",
    "/images/pd14.png",
    "/images/pd13.png",
    "/images/pd2.png",
    "/images/pd19.png",
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-10 px-4">
      {/* Section Héros avec Animations Améliorées */}
      <motion.section
        className="container mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 flex justify-center items-center">
          Dr. Bouzid Hichem{" "}
          <FaUserMd className="ml-4 text-blue-500" size={50} />
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-light italic">
          Fondateur & Dentiste Principal | Pionnier dans les Soins Dentaires
          Modernes
        </p>
      </motion.section>

      {/* Section Informations du Dentiste */}
      <motion.section
        className="container mx-auto flex flex-col lg:flex-row items-center bg-white shadow-lg p-8 md:p-12 rounded-xl mb-12 hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        {/* Image du Dentiste */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/dr3.png"
              alt="Dr. Bouzid Hichem"
              width={500}
              height={500}
              className="object-cover shadow-lg"
            />
          </motion.div>
        </div>

        {/* Description */}
        <div className="w-full lg:w-2/3 text-left lg:pl-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 flex items-center">
            Une Visionnaire en Dentisterie Moderne{" "}
            <FaStar className="ml-2 text-yellow-500" />
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
            Avec plus de{" "}
            Connu pour son grand savoir-faire, <span className="font-bold">docteur bouzid hichem {" "}</span>est un
            chirurgien-dentiste avec une expertise de plus de 20 ans. Il est
            réputé pour son travail minutieux et sa passion profonde pour la
            médecine dentaire..
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-base md:text-lg">
            <li>
              <FaTooth className="inline-block text-blue-500 mr-2" />{" "}
              Orthodontie Moderne
            </li>
            <li>
              <FaSmile className="inline-block text-yellow-500 mr-2" />{" "}
              Esthétique Dentaire
            </li>
            <li>
              <FaHeartbeat className="inline-block text-red-500 mr-2" />{" "}
              Couronnes en Zircon et Céramique
            </li>
            <li>
              <FaHandsHelping className="inline-block text-green-500 mr-2" />{" "}
              Laser Dentaire
            </li>
            <li>
              <FaClock className="inline-block text-purple-500 mr-2" /> Implant
              Dentaire Sans Chirurgie
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Section Clinique */}
      <motion.section
        className="container mx-auto flex flex-col lg:flex-row items-center bg-white shadow-lg p-8 md:p-12 rounded-xl mb-12 hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Bienvenue à la Clinique Dentaire Smile
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
            Notre clinique moderne offre un environnement serein et équipé des
            dernières technologies dentaires pour garantir des soins de la plus
            haute qualité. Votre confort et votre sourire sont notre priorité.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/appointment"
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Prendre Rendez-vous
          </motion.a>
        </div>
        <div className="w-full lg:w-1/2 relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
          <motion.div>
            <Image
              src="/images/drBouzidClinic.png"
              alt="Clinique Dentaire Smile"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section Certifications */}
      <motion.section
        className="container mx-auto bg-white shadow-lg p-8 md:p-12 rounded-xl mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 flex items-center">
          Certifications <FaCertificate className="ml-2 text-green-500" />
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          Le Dr. Bouzid détient plus de 15 certifications reconnues internationalement,
          témoignant de son engagement envers l&#39;excellence dentaire.
        </p>

        <div id="Carrière" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="relative h-32 md:h-40 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={cert}
                alt={`Certification ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Pourquoi Choisir */}
      <motion.section
        className="container mx-auto bg-white shadow-lg p-8 md:p-12 rounded-xl mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Pourquoi Choisir le Dr. Bouzid Hichem?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <FaStar className="text-yellow-500 mr-3" size={24} />
            Expertise en orthodontie avancée, dentisterie au laser et implants
            non chirurgicaux
          </li>
          <li className="flex items-center">
            <FaTooth className="text-blue-500 mr-3" size={24} />
            Technologies de pointe incluant couronnes en zircon et lasers
            dentaires
          </li>
          <li className="flex items-center">
            <FaSmile className="text-yellow-500 mr-3" size={24} />
            Soins dentaires personnalisés et sans douleur
          </li>
          <li className="flex items-center">
            <FaCertificate className="text-green-500 mr-3" size={24} />
            Certifications et distinctions de classe mondiale
          </li>
          <li className="flex items-center">
            <FaHandsHelping className="text-purple-500 mr-3" size={24} />
            Clinique moderne et axée sur le patient
          </li>
        </ul>
      </motion.section>

      {/* Section Expérience */}

      <ExperienceSection/>


      {/* Section Témoignages */}
      <motion.section
        className="container mx-auto bg-white shadow-lg p-8 md:p-12 rounded-xl my-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Témoignages
        </h2>
        <div className="space-y-6">
          {/* Témoignage 1 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-4">
              &#34;Le Dr. Bouzid est exceptionnel ! Il m&#39;a aidé à retrouver
              un sourire éclatant avec un traitement sans douleur et très
              professionnel.&#34;
            </p>
            <div className="flex items-center">
              <Image
                src="/images/client4.png"
                alt="Client satisfait"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">Karim Ouret</p>
                <p className="text-gray-500 text-sm">Paris</p>
              </div>
            </div>
          </motion.div>

          {/* Témoignage 2 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-4">
              &#34;Une équipe formidable et des installations modernes. Je
              recommande vivement la clinique Smile !&#34;
            </p>
            <div className="flex items-center">
              <Image
                src="/images/client2.webp"
                alt="Client satisfait"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">Mohamed Siad</p>
                <p className="text-gray-500 text-sm">Alger</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Appel à l'Action */}
      <motion.section
        className="container mx-auto bg-blue-500 text-white p-8 md:p-12 rounded-xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Prêt à Transformer Votre Sourire ?
        </h2>
        <p className="mb-6">
          Contactez-nous dès aujourd&#39;hui pour une consultation
          personnalisée.
        </p>
        <motion.a
        href="/appointment"
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Prendre Rendez-vous
        </motion.a>
      </motion.section>

      {/* Formulaire de Demande de Devis */}
      <DemandeDevis />
    </div>
  );
};

export default AboutPage;
