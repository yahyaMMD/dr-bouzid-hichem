"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ReactCompareImage from "react-compare-image";
import { Cases } from "../../../../lib/Data";
import { FaSmile, FaClock, FaTooth, FaUser, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";
import DemandeDevis from "../../../../components/RequestForm";

interface Params {
  id: string;
}

const CaseDetailsPage = ({ params }: { params: Params }) => {
  const id = params.id;
  const router = useRouter();
  const caseDetails = Cases.find((c) => c.id === Number(id));

  if (!caseDetails) return <p>Loading...</p>;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        Avant et Après
      </motion.h1>

      {/* Before & After Slider with Animation */}
      <motion.div
        className="w-full max-w-4xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ReactCompareImage
          leftImage={caseDetails.beforeImage}
          rightImage={caseDetails.afterImage}
        />
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        Avant et Après traitement
      </motion.h1>

      {/* Before & After Section with Text and Hover Effect */}
      <motion.div
        className="w-full max-w-6xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Traitements utilisés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={caseDetails.beforeImage}
              alt="Avant traitement"
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800">
                Avant traitement
              </h3>
              <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
            </div>
          </div>
          <div className="relative group text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={caseDetails.afterImage}
              alt="Après traitement"
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800">
                Après traitement
              </h3>
              <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Case Info with Icons */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700 mb-2 flex justify-center items-center">
          <FaSmile className="mr-2 text-blue-500" /> Traitement:{" "}
          {caseDetails.treatment}
        </p>
      </div>

      {/* Detailed Treatment Info */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Détails du traitement
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Ce traitement a permis d&#39;améliorer &#39;apparence générale du
          sourire du patient. Avec des techniques avancées, nous avons obtenu un
          résultat durable et naturel.
        </p>
        <p className="text-lg text-gray-600">
          Grâce à nos équipements modernes et à &#39;expertise de notre équipe,
          ce traitement a été un succès total.
        </p>
      </motion.div>

      {/* Patient Feedback Section */}
      <motion.div
        className="bg-blue-50 p-6 rounded-lg shadow-lg text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex justify-center items-center space-x-2 text-lg text-blue-600">
          <FaThumbsUp className="text-2xl" />
          <span>100% satisfait</span>
        </div>
      </motion.div>

      {/* Back to gallery button */}
      <motion.div className="flex justify-center mt-8">
        <button
          onClick={() => router.push("/galerie")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-600 transition-all duration-300"
        >
          Revenir vers la galerie
        </button>
      </motion.div>

      <DemandeDevis/>
    </section>
  );
};

export default CaseDetailsPage;
