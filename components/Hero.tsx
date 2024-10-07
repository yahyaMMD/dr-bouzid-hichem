import { Dentist } from "../lib/Data";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] sm:h-[80vh] bg-cover bg-center bg-no-repeat opacity-100"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="px-4 h-full flex items-center justify-start sm:w-[40%] sm:ml-8">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-8 text-blue-400 ">
            <span className="block animate-fadeInUp">
              Technologie dentaire avancée
            </span>
          </h1>
          <p className="font-bold mb-10 animation-slideFromTop text-[22px] text-gray-100 opacity-0 animate-fadeInUp delay-500 ">
            Bienvenue au cabinet du {" "}
            <span className="text-blue-500">{Dentist.name}</span>
            <br />
            Des soins dentaires de
            qualité, avec une équipe chaleureuse, à votre service.
          </p>
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
    </section>
  );
};

export default Hero;
