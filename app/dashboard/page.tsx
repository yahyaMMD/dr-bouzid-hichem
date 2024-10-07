"use client";

import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaUser,
  FaPlus,
  FaEdit,
  FaTrash,
  FaHistory,
} from "react-icons/fa";
import { format, parseISO } from "date-fns";
import { Line, Pie } from "react-chartjs-2";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "chart.js/auto";
import { ChartData } from "chart.js/auto";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdOutlineDoneOutline } from "react-icons/md";

interface Appointment {
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  appointmentTypes: string[];
  problemDescription: string | null;
  status: string;
  appointmentDate: string; // As it comes from the API as a string
  createdAt: string;
  updatedAt: string;
}

interface Patient {
  id: string;
  fullName: string;
  age: number;
  gender: string;
  phone: string;
  nextAppointmentDate: string;
  problem: string;
  totalPrice: number;
  sessionDetails: string[];
  status: string;
  registeredAt: string;
}

const Page = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<
    | "dashboard"
    | "appointments"
    | "patients"
    | "calendar"
    | "Appointments History"
    | "Patients History"
  >("dashboard");
  const [filteredAppointments, setFilteredAppointments] =
    useState<Appointment[]>(appointments);

  const router = useRouter();
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

  // Pagination state for appointments

  const [currentAppointmentsPage, setCurrentAppointmentsPage] = useState(1);
  const appointmentsPerPage = 10;

  // Pagination state for patients
  const [currentPatientsPage, setCurrentPatientsPage] = useState(1);
  const patientsPerPage = 10;

  // Pagination state for history appointments
  const [currentHistoryAppointmentsPage, setCurrentHistoryAppointmentsPage] =
    useState(1);
  const HistoryAppointmentsPerPage = 10;

  // Pagination state for history patients
  const [currentHistoryPatientsPage, setCurrentHistoryPatientsPage] =
    useState(1);
  const HistoryPatientsPerPage = 10;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments");
        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await res.json();
        setAppointments(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("/api/patients");
        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await res.json();
        setPatients(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Aggregate appointment counts by month
  const appointmentCountsByMonth = appointments.reduce(
    (acc: { [key: string]: number }, appt) => {
      const month = format(parseISO(appt.appointmentDate), "yyyy-MM");
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    },
    {}
  );

  const reportData = {
    labels: Object.keys(appointmentCountsByMonth),
    datasets: [
      {
        label: "Appointments",
        data: Object.values(appointmentCountsByMonth),
        fill: false,
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
      },
    ],
  };

  const appointmentTypes = appointments.reduce(
    (acc: { [key: string]: number }, appt) => {
      appt.appointmentTypes.forEach((type) => {
        acc[type] = (acc[type] || 0) + 1;
      });
      return acc;
    },
    {}
  );

  const appointmentStatuses = appointments.reduce(
    (acc: { [key: string]: number }, appt) => {
      acc[appt.status] = (acc[appt.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const appointmentTypesData = {
    labels: Object.keys(appointmentTypes),
    datasets: [
      {
        label: "Appointment Types",
        data: Object.values(appointmentTypes),
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#FF5722"],
      },
    ],
  };

  const appointmentStatusesData = {
    labels: Object.keys(appointmentStatuses),
    datasets: [
      {
        label: "Appointment Statuses",
        data: Object.values(appointmentStatuses),
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
      },
    ],
  };

  // Aggregate patient counts by status
  const patientStatuses = patients.reduce(
    (acc: { [key: string]: number }, patient) => {
      acc[patient.status] = (acc[patient.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const patientStatusesData = {
    labels: Object.keys(patientStatuses),
    datasets: [
      {
        label: "Patient Statuses",
        data: Object.values(patientStatuses),
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
      },
    ],
  };

  // Aggregate patient counts by registration month
  interface PatientCountByMonth {
    [key: string]: number;
  }

  const patientCountsByMonth: PatientCountByMonth = patients.reduce(
    (acc: PatientCountByMonth, patient: Patient) => {
      const month = format(parseISO(patient.registeredAt), "yyyy-MM");
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    },
    {}
  );

  const patientReportData: ChartData<"line"> = {
    labels: Object.keys(patientCountsByMonth),
    datasets: [
      {
        label: "Patients",
        data: Object.values(patientCountsByMonth),
        fill: false,
        backgroundColor: "#34D399",
        borderColor: "#34D399",
      },
    ],
  };

  const handleDeleteAppointment = async (id: string) => {
    try {
      const res = await fetch(`/api/appointment/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setAppointments(appointments.filter((appt) => appt.id !== id));
        setFilteredAppointments(
          filteredAppointments.filter((appt) => appt.id !== id)
        );
        alert("Appointment deleted successfully");
      } else {
        alert("Failed to delete appointment");
      }
    } catch (err) {
      alert("Error deleting appointment");
    }
  };

  const handleEditAppointment = async (appointment: Appointment) => {
    // Set the new status to 'accepted'
    const updatedAppointment = { ...appointment, status: "accepted" };

    try {
      const res = await fetch(`/api/appointment/${appointment.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAppointment),
      });

      if (res.ok) {
        const updatedData = await res.json();

        // Update the state with the newly updated appointment data
        const updatedList = appointments.map((appt) =>
          appt.id === updatedData.id ? updatedData : appt
        );
        setAppointments(updatedList);
        setFilteredAppointments(updatedList); // Ensure filtered list is also updated

        alert("Appointment updated to accepted successfully");
      } else {
        alert("Failed to update appointment");
      }
    } catch (err) {
      alert("Error updating appointment");
    }
  };

  const handleUpdatePatientStatus = async (patient: Patient) => {
    const updatedPatient = { ...patient, status: "completed" };

    try {
      const res = await fetch(`/api/patient/${patient.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPatient),
      });

      if (res.ok) {
        const updatedData = await res.json();
        // Update local state with the updated patient information
        setPatients((prevPatients) =>
          prevPatients.map((p) => (p.id === updatedData.id ? updatedData : p))
        );
        alert("Patient status updated to completed");
      } else {
        alert("Failed to update patient status");
      }
    } catch (error) {
      console.error("Error updating patient:", error);
      alert("Error updating patient");
    }
  };

  const handleDeletePatient = async (id: string) => {
    try {
      const res = await fetch(`/api/patient/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Remove the deleted patient from local state
        setPatients((prevPatients) => prevPatients.filter((p) => p.id !== id));
        alert("Patient deleted successfully");
      } else {
        alert("Failed to delete patient");
      }
    } catch (error) {
      console.error("Error deleting patient:", error);
      alert("Error deleting patient");
    }
  };

  const handleEditPatient = (patient: Patient) => {
    setEditingPatient(patient); // Open the form and set the patient to edit
  };

  const handleSavePatient = async (updatedPatient: Patient) => {
    try {
      const res = await fetch(`/api/patient/${updatedPatient.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPatient),
      });

      if (res.ok) {
        const updatedData = await res.json();
        setPatients((prevPatients) =>
          prevPatients.map((p) => (p.id === updatedData.id ? updatedData : p))
        );
        setEditingPatient(null); // Close the form
        alert("Patient updated successfully");
      } else {
        alert("Failed to update patient");
      }
    } catch (error) {
      console.error("Error updating patient:", error);
      alert("Error updating patient");
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments");
        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await res.json();
        setAppointments(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Fetch Patients
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("/api/patients");
        if (!res.ok) {
          throw new Error("Failed to fetch patients");
        }
        const data = await res.json();
        setPatients(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Calculate the appointments to show on the current page
  const indexOfLastAppointment = currentAppointmentsPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  // Calculate the patients to show on the current page
  const indexOfLastPatient = currentPatientsPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  // Handle appointment pagination
  const totalAppointmentsPages = Math.ceil(
    appointments.length / appointmentsPerPage
  );
  const handleAppointmentsPageChange = (pageNumber: number) => {
    setCurrentAppointmentsPage(pageNumber);
  };

  // Handle patient pagination
  const totalPatientsPages = Math.ceil(patients.length / patientsPerPage);
  const handlePatientsPageChange = (pageNumber: number) => {
    setCurrentPatientsPage(pageNumber);
  };

  return (
    <div className="flex bg-gray-100">
      {/* Barre latérale */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Tableau de bord Admin</h1>
        </div>
        <nav className="mt-10 flex-1">
          <ul>
            <li
              className={`flex items-center p-4 hover:bg-blue-700 cursor-pointer ${
                activeTab === "dashboard" ? "bg-blue-700" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <FaHome className="mr-4" />
              <span>Tableau de bord</span>
            </li>
            <li
              className={`flex items-center p-4 hover:bg-blue-700 cursor-pointer ${
                activeTab === "appointments" ? "bg-blue-700" : ""
              }`}
              onClick={() => setActiveTab("appointments")}
            >
              <FaCalendarAlt className="mr-4" />
              <span>Rendez-vous</span>
            </li>
            <li
              className={`flex items-center p-4 hover:bg-blue-700 cursor-pointer ${
                activeTab === "patients" ? "bg-blue-700" : ""
              }`}
              onClick={() => setActiveTab("patients")}
            >
              <FaUser className="mr-4" />
              <span>Patients</span>
            </li>
            <li
              className={`flex items-center p-4 hover:bg-blue-700 cursor-pointer ${
                activeTab === "calendar" ? "bg-blue-700" : ""
              }`}
              onClick={() => setActiveTab("calendar")}
            >
              <FaCalendarAlt className="mr-4" />
              <span>Calendrier</span>
            </li>
            <li
              className={`flex items-center p-4 hover:bg-blue-700 cursor-pointer ${
                activeTab === "Appointments History" ? "bg-blue-700" : ""
              }`}
              onClick={() => setActiveTab("Appointments History")}
            >
              <FaHistory className="mr-4" />
              <span>Historique des Rendez-vous</span>
            </li>
            <li
              className={`flex items-center p-4 hover:bg-blue-700 cursor-pointer ${
                activeTab === "Patients History" ? "bg-blue-700" : ""
              }`}
              onClick={() => setActiveTab("Patients History")}
            >
              <FaHistory className="mr-4" />
              <span>Historique des Patients</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col ">
        {/* En-tête */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/images/character.png"
                alt="Profil"
                width={64}
                height={64}
                className=" px-1 py-1 rounded-full border-2 border-blue-800"
              />
            </div>
          </div>
        </header>

        {/* Zone de contenu */}
        <main className="p-4 flex-1">
          {activeTab === "dashboard" && (
            <>
              {/* Cartes de vue d'ensemble */}
              <div className="flex flex-row gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-700">
                    Nombre total de Rendez-vous
                  </h3>
                  <p className="mt-2 text-3xl font-semibold">
                    {appointments.length}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-700">
                    Rendez-vous à venir
                  </h3>
                  <p className="mt-2 text-3xl font-semibold">
                    {
                      appointments.filter(
                        (appt) => new Date(appt.appointmentDate) > new Date()
                      ).length
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-700">
                    Rendez-vous manqués
                  </h3>
                  <p className="mt-2 text-3xl font-semibold">
                    {
                      appointments.filter(
                        (appt) => new Date(appt.appointmentDate) < new Date()
                      ).length
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-700">
                    Nombre total de Patients
                  </h3>
                  <p className="mt-2 text-3xl font-semibold">
                    {patients.length}
                  </p>
                </div>
              </div>

              {/* Section des rapports */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Rendez-vous au fil du temps
                </h3>
                <Line data={reportData} />
              </div>

              <div className="flex flex-row gap-4">
                <div className="mt-10 bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-700 mb-4">
                    Types de Rendez-vous
                  </h3>
                  <Pie data={appointmentTypesData} />
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-700 mb-4">
                    Statuts des Rendez-vous
                  </h3>
                  <Pie data={appointmentStatusesData} />
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-700 mb-4">
                    Statuts des Patients
                  </h3>
                  <Pie data={patientStatusesData} />
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Patients au fil du temps
                </h3>
                <Line data={patientReportData} />
              </div>
            </>
          )}

          {activeTab === "appointments" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-700">
                  Gérer les Rendez-vous
                </h3>
                <button
                  onClick={() => router.push("/appointment")}
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded"
                >
                  <FaPlus className="mr-2" /> Ajouter un Rendez-vous
                </button>
              </div>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Nom
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Téléphone
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Type de Rendez-vous
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Date
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentAppointments
                    .filter((appoinment) => appoinment.status === "processing")
                    .map((appointment) => (
                      <tr key={appointment.id} className="border-t">
                        <td className="py-2 px-4">
                          {appointment.firstName} {appointment.lastName}
                        </td>
                        <td className="py-2 px-4">{appointment.phone}</td>
                        <td className="py-2 px-4">
                          {appointment.appointmentTypes.join(", ")}
                        </td>
                        <td className="py-2 px-4">
                          {format(
                            new Date(appointment.appointmentDate),
                            "PPpp"
                          )}
                        </td>
                        <td className="py-2 px-4 flex space-x-2">
                          <button
                            onClick={() => handleEditAppointment(appointment)}
                            className="text-blue-600 hover:underline flex items-center"
                          >
                            <MdOutlineDoneOutline
                              className="mr-1"
                              color="green"
                            />{" "}
                            Accepter
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteAppointment(appointment.id)
                            }
                            className="text-red-600 hover:underline flex items-center"
                          >
                            <FaTrash className="mr-1" /> Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() =>
                    handleAppointmentsPageChange(currentAppointmentsPage - 1)
                  }
                  disabled={currentAppointmentsPage === 1}
                  className={`px-4 py-2 rounded ${
                    currentAppointmentsPage === 1
                      ? "bg-gray-300"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  Précédent
                </button>
                <span>
                  Page {currentAppointmentsPage} sur {totalAppointmentsPages}
                </span>
                <button
                  onClick={() =>
                    handleAppointmentsPageChange(currentAppointmentsPage + 1)
                  }
                  disabled={currentAppointmentsPage === totalAppointmentsPages}
                  className={`px-4 py-2 rounded ${
                    currentAppointmentsPage === totalAppointmentsPages
                      ? "bg-gray-300"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {activeTab === "patients" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-700">
                  Gérer les Patients
                </h3>
                <button
                  onClick={() => router.push("/Patient")}
                  className="flex items-center bg-green-600 text-white px-4 py-2 rounded"
                >
                  <FaPlus className="mr-2" /> Ajouter un Patient
                </button>
              </div>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Nom
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Téléphone
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Inscrit le
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPatients
                    .filter((patient) => patient.status === "processing")
                    .map((patient) => (
                      <tr key={patient.id} className="border-t">
                        <td className="py-2 px-4">{patient.fullName}</td>
                        <td className="py-2 px-4">{patient.phone}</td>
                        <td className="py-2 px-4">
                          {format(new Date(patient.registeredAt), "PPpp")}
                        </td>
                        <td className="py-2 px-4 flex space-x-2">
                          <button
                            onClick={() => handleUpdatePatientStatus(patient)}
                            className="text-green-600 hover:underline flex items-center"
                          >
                            <MdOutlineDoneOutline className="mr-1" /> Terminé
                          </button>
                          <button
                            onClick={() => handleEditPatient(patient)}
                            className="text-blue-600 hover:underline flex items-center"
                          >
                            <FaEdit className="mr-1" /> Modifier
                          </button>
                          <button
                            onClick={() => handleDeletePatient(patient.id)}
                            className="text-red-600 hover:underline flex items-center"
                          >
                            <FaTrash className="mr-1" /> Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {editingPatient && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSavePatient(editingPatient);
                  }}
                  className="mt-6 bg-gray-100 p-6 rounded"
                >
                  <h3 className="text-lg font-bold mb-4">
                    Modifier le Patient
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nom Complet
                      </label>
                      <input
                        type="text"
                        value={editingPatient.fullName}
                        onChange={(e) =>
                          setEditingPatient({
                            ...editingPatient,
                            fullName: e.target.value,
                          })
                        }
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                      <input
                        type="text"
                        value={editingPatient.phone}
                        onChange={(e) =>
                          setEditingPatient({
                            ...editingPatient,
                            phone: e.target.value,
                          })
                        }
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Âge
                      </label>
                      <input
                        type="number"
                        value={editingPatient.age}
                        onChange={(e) =>
                          setEditingPatient({
                            ...editingPatient,
                            age: parseInt(e.target.value),
                          })
                        }
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Sexe
                      </label>
                      <select
                        value={editingPatient.gender}
                        onChange={(e) =>
                          setEditingPatient({
                            ...editingPatient,
                            gender: e.target.value,
                          })
                        }
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="Male">Homme</option>
                        <option value="Female">Femme</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Prochain Rendez-vous
                      </label>
                      <input
                        type="date"
                        value={editingPatient.nextAppointmentDate}
                        onChange={(e) =>
                          setEditingPatient({
                            ...editingPatient,
                            nextAppointmentDate: e.target.value,
                          })
                        }
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Problème
                      </label>
                      <input
                        type="text"
                        value={editingPatient.problem}
                        onChange={(e) =>
                          setEditingPatient({
                            ...editingPatient,
                            problem: e.target.value,
                          })
                        }
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Prix Total
                      </label>
                      <input
                        type="number"
                        value={editingPatient.totalPrice}
                        onChange={(e) =>
                          setEditingPatient({
                            ...editingPatient,
                            totalPrice: parseFloat(e.target.value),
                          })
                        }
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Sauvegarder
                    </button>
                  </div>
                </form>
              )}

              {/* Pagination pour les patients */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() =>
                    handlePatientsPageChange(currentPatientsPage - 1)
                  }
                  disabled={currentPatientsPage === 1}
                  className={`px-4 py-2 rounded ${
                    currentPatientsPage === 1
                      ? "bg-gray-300"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  Précédent
                </button>
                <span>
                  Page {currentPatientsPage} sur {totalPatientsPages}
                </span>
                <button
                  onClick={() =>
                    handlePatientsPageChange(currentPatientsPage + 1)
                  }
                  disabled={currentPatientsPage === totalPatientsPages}
                  className={`px-4 py-2 rounded ${
                    currentPatientsPage === totalPatientsPages
                      ? "bg-gray-300"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {activeTab === "calendar" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Calendrier des Rendez-vous
              </h3>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={[
                  ...appointments
                    .filter((appointment) => appointment.status === "accepted")
                    .map((appt) => ({
                      title: `Rendez-vous: ${appt.firstName} ${appt.lastName}`,
                      start: appt.appointmentDate,
                    })),
                  ...patients
                    .filter((patient) => patient.status !== "completed")
                    .map((patient) => ({
                      title: `Patient: ${patient.fullName}`,
                      start: patient.nextAppointmentDate,
                    })),
                ]}
                eventClick={(info) => alert(`Événement: ${info.event.title}`)}
              />
            </div>
          )}

          {activeTab === "Appointments History" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-700">
                  Historique des Rendez-vous
                </h3>
              </div>
              <div className="flex justify-between items-center mb-4"></div>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Nom
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Téléphone
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Type de Rendez-vous
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments
                    .filter((appointment) => appointment.status === "accepted")
                    .map((appointment) => (
                      <tr key={appointment.id} className="border-t">
                        <td className="py-2 px-4">
                          {`${appointment.firstName} ${appointment.lastName}`}
                        </td>
                        <td className="py-2 px-4">{appointment.phone}</td>
                        <td className="py-2 px-4">
                          {appointment.appointmentTypes.join(", ")}
                        </td>
                        <td className="py-2 px-4">
                          {format(
                            new Date(appointment.appointmentDate),
                            "PPpp"
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "Patients History" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-700">
                  Historique des Patients
                </h3>
              </div>
              <div className="flex justify-between items-center mb-4"></div>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Nom
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Téléphone
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Inscrit le
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patients
                    .filter((patient) => patient.status === "completed")
                    .map((patient) => (
                      <tr
                        key={patient.id}
                        className="border-t"
                        onClick={() => handleEditPatient(patient)}
                      >
                        <td className="py-2 px-4">{patient.fullName}</td>
                        <td className="py-2 px-4">{patient.phone}</td>
                        <td className="py-2 px-4">
                          {format(new Date(patient.registeredAt), "PPpp")}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {editingPatient && (
                <div className="mt-6 bg-gray-100 p-6 rounded">
                  <h3 className="text-lg font-bold mb-4">Détails du Patient</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="block text-sm font-medium text-gray-700">
                        Nom Complet
                      </p>
                      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        {editingPatient.fullName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        {editingPatient.phone}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Âge
                      </label>
                      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        {editingPatient.age}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Sexe
                      </label>
                      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        {editingPatient.gender}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Prochain Rendez-vous
                      </label>
                      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        {format(
                          new Date(editingPatient.nextAppointmentDate),
                          "PPpp"
                        )}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Problème
                      </label>
                      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        {editingPatient.problem}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Prix Total
                      </label>
                      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        {editingPatient.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;
