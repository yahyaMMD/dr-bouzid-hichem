'use client';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
// Import Image component
import Image from 'next/image';

const ExperienceSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCounting, setStartCounting] = useState(false);

  // Array of flag images
  const flags = [
    { src: "/images/france.png", alt: "Flag of France" },
    { src: "/images/usa.png", alt: "Flag of USA" },
    { src: "/images/germany.png", alt: "Flag of Germany" },
    { src: "/images/turkey.png", alt: "Flag of Turkey" },
    { src: "/images/morocco.png", alt: "Flag of Morocco" },
    { src: "/images/belgium.png", alt: "Flag of Belgium" },
    { src: "/images/tunisia.png", alt: "Flag of Tunisia" },
  ];

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-gray-50 text-black py-16 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">
        L’expérience du Dr Bouzid Hichem à travers le monde
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* First number block */}
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold">
            {startCounting && (
              <CountUp start={0} end={44000} duration={4} separator="," />
            )}
            +
          </div>
          <p className="text-sm md:text-lg mt-2">Patients traités</p>
        </div>

        {/* Second number block */}
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold">
            {startCounting && (
              <CountUp start={0} end={43000} duration={4} separator="," />
            )}
            +
          </div>
          <p className="text-sm md:text-lg mt-2">Heures pratiquées</p>
        </div>
      </div>

      {/* Participation text */}
      <div className="text-4xl md:text-6xl font-bold mt-2">
        {startCounting && <CountUp start={0} end={20} duration={4} />}
      </div>
      <p className="text-lg md:text-2xl mt-4">
        Ans d&#39;expérience
      </p>

      {/* New section for the flags */}
      <div className={`mt-8 opacity-0 transition-opacity duration-1000 ${inView && "opacity-100"} animate-fadeIn`}>
        <h3 className="text-xl font-medium mb-4">
          Participation à plus de 100 séminaires et formations pour dentiste
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {flags.map((flag, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <Image
                src={flag.src}
                alt={flag.alt}
                width={100}  // Adjust the size of the flag images
                height={70}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
