'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaTooth, FaInfoCircle, FaSmile, FaFilter } from "react-icons/fa";
import { Cases } from "../../lib/Data";
import { motion } from "framer-motion";


const GaleriePage = () => {
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const router = useRouter();

  const handleFilterChange = (value: any) => {
    setSelectedTreatment(value);
  };

  const filteredCases = Cases.filter((c) =>
    selectedTreatment ? c.treatment === selectedTreatment : true
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">
        Galerie de photos avant et après nos traitements dentaires
      </h1>
      <p className="text-center text-lg mb-8 text-gray-600">
        Découvrez les résultats spectaculaires de nos traitements dentaires.
      </p>

      {/* Display filtered cases with animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-8 text-center">
        {filteredCases.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            className="relative group"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg mb-4 group-hover:shadow-2xl transition-all duration-500">
              <img
                src={caseItem.beforeImage}
                alt="Before treatment"
                className="w-full h-auto transform transition-all duration-500 hover:scale-110 hover:rotate-1"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => router.push(`/galerie/case/${caseItem.id}`)}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all"
              >
                <FaInfoCircle className="text-lg" />
                <span>Plus de détails sur ce cas</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Content */}
      <div className="mt-16 px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pourquoi choisir nos services dentaires?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Nous vous garantissons des traitements de haute qualité.
        </p>
      </div>
    </section>
  );
};

export default GaleriePage;
