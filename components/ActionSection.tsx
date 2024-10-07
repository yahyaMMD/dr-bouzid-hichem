import React from "react";

const ActionSection = () => {
  return (
    <section
      className="relative h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/15-1.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <p className="text-lg mb-4 font-bold">
          Notre priorité absolue est d&#39;assurer votre satisfaction !
        </p>
        <h1 className="text-5xl font-bold mb-6">
          Croyez. Attendez. Réalité.
        </h1>
        <a
          href="/appointment"
          className="relative inline-block py-3 px-6 font-bold text-white bg-blue-500 rounded overflow-hidden group"
        >
          <span className="absolute inset-0 bg-black transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
          <span className="relative z-10">Prendre un Rendez-vous</span>
        </a>
      </div>
    </section>
  );
};

export default ActionSection;
