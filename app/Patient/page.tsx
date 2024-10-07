'use client';

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const AppointmentForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState({
    fullName: "",
    age: 0,
    gender: "",
    phone: "",
    nextAppointmentDate: new Date(),
    problem: "",
    totalPrice: 0,
    sessionDetails: "",
    status: "processing", // Default status
    registeredAt: new Date(), // Default registration date
  });

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setPatient({ ...patient, nextAppointmentDate: date });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const patientData = {
      ...patient,
      nextAppointmentDate: patient.nextAppointmentDate.toISOString(),
    };

    try {
      const res = await fetch('/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });

      const result = await res.json();

      if (res.ok) {
        router.push('/dashboard');
      } else {
        console.error("Failed to create patient:", result);
      }
    } catch (err) {
      console.error("Error during submission:", err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <motion.section 
      className="flex flex-col mt-12 px-4 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-[90%] lg:w-[80%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 text-black">
          Création d&#39;un nouveau patient
        </h1>
        <div className="bg-gray-100 p-8 rounded-md flex flex-col justify-center mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-black">Informations du Patient</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Nom Complet *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Entrez le nom complet"
                value={patient.fullName}
                onChange={(e) => setPatient({ ...patient, fullName: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                Âge *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Entrez l'âge"
                value={patient.age}
                onChange={(e) => setPatient({ ...patient, age: parseInt(e.target.value) })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                required
              />
            </div>
            <div>
  <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
    Genre *
  </label>
  <select
    id="gender"
    name="gender"
    value={patient.gender}
    onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
    required
  >
    <option value="" disabled>
      Sélectionnez le genre
    </option>
    <option value="Male">Masculin</option>
    <option value="Female">Féminin</option>
  </select>
</div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Entrez le numéro de téléphone"
                value={patient.phone}
                onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="totalPrice" className="block text-sm font-semibold text-gray-700 mb-2">
                Prix Total *
              </label>
              <input
                type="number"
                id="totalPrice"
                name="totalPrice"
                placeholder="Entrez le prix total"
                value={patient.totalPrice}
                onChange={(e) => setPatient({ ...patient, totalPrice: parseFloat(e.target.value) })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="problem" className="block text-sm font-semibold text-gray-700 mb-2">
                Décrivez votre problème
              </label>
              <textarea
                id="problem"
                name="problem"
                placeholder="Décrivez le problème du patient"
                value={patient.problem}
                onChange={(e) => setPatient({ ...patient, problem: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                rows={5}
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="nextAppointmentDate" className="block text-sm font-semibold text-gray-700 mb-2">
                Date et Heure Demandées *
              </label>
              <DatePicker
                selected={patient.nextAppointmentDate}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="sessionDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                Détails de la session
              </label>
              <textarea
                id="sessionDetails"
                name="sessionDetails"
                placeholder="Entrez les détails de la session"
                value={patient.sessionDetails || ''}
                onChange={(e) => setPatient({ ...patient, sessionDetails: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                rows={4}
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className={`mt-8 w-full bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold p-3 rounded-md ${
                  loading ? "opacity-50" : "hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                } shadow-lg hover:shadow-2xl`}
                disabled={loading}
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default AppointmentForm;
