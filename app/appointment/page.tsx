'use client'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReviewSlider from "../../components/ReviewSlider";
import { useRouter } from "next/navigation";

const AppointmentForm = () => {
  const router = useRouter();

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [appointmentTypes, setAppointmentTypes] = useState<string[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [problemDescription, setProblemDescription] = useState("");

  const [toggle, setToggle] = useState(false);

  const handleAppointmentTypeChange = (type: string) => {
    setAppointmentTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const appointmentData = {
      firstName,
      lastName,
      phone,
      appointmentTypes,
      problemDescription,
      status: "processing", // Default status
      appointmentDate: startDate?.toISOString(), // Ensuring the date is in ISO format
    };

    console.log("Sending data:", appointmentData);

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await res.json();
      console.log("Response status:", res.status);
      console.log("Response data:", result);

      if (res.ok) {
        console.log("Appointment created successfully");
        router.push('/ConfirmationAppointment');
      } else {
        console.error("Failed to create appointment:", result);
      }
    } catch (err) {
      console.error("Error during submission:", err);
    }
  };

  return (
    <section className="flex flex-col mt-12 px-4 items-center">
      <div className="w-[100%] md:w-[90%] lg:w-[80%]">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-black">
        Prendre rendez-vous
        </h1>
        <p className="text-center text-gray-500 my-8 font-bold">
        Veuillez remplir les informations ci-dessous pour demander un rendez-vous.
        </p>
        <div className="bg-gray-100 p-8 rounded-md flex flex-col justify-center mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-black">Patient Information</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="firstName"
              >
                Prénom *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="lastName"
              >
                Nom *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="phone"
              >
                Votre téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
              Prendre rendez-vous pour:
              </label>
              <div className="flex flex-wrap gap-4">
                {["Examen dentaire", "Plombage dentaire", "Implants dentaires", "Blanchiment des dents", "Traitement orthodontique", "autre"].map(
                  (type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={type}
                        checked={appointmentTypes.includes(type)}
                        onChange={() => handleAppointmentTypeChange(type)}
                        className="form-checkbox text-teal-600 rounded-full focus:ring-teal-500 focus:ring-offset-0"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  )
                )}
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="problemDescription"
              >
                Décrivez votre problème
              </label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
                rows={5}
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="appointmentDate"
              >
                Date et heure demandées *
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400 transition duration-300"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
              onClick={() => setToggle(!toggle)}
                type="submit"
                className={` mt-8 w-full  text-white font-bold p-3 rounded-md hover:bg-teal-700 transition duration-300 transform hover:scale-105 ${ toggle ? 'disabled:opacity-50 cursor-not-allowed' : ''} ${toggle ? 'bg-green-400' : 'bg-gradient-to-r from-teal-400 to-teal-600'} `}
              >
                {!toggle ? 'Envoyer' : 'En cours...'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ReviewSlider/>
    </section>
  );
};

export default AppointmentForm;
