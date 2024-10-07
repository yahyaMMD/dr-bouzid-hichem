'use client'
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { motion } from "framer-motion";

interface Review {
  image: string;
  name: string;
  status: string;
  message: string;
}

const reviews: Review[] = [
  {
    image: '/images/client1.webp',
    name: "Mohamed Benali",
    status: "Client Satisfait",
    message: "Je suis venue dans cette clinique dentaire pour une urgence et je suis restée depuis. J’ai toujours eu une bonne expérience avec mes traitements dentaires ici, mes questions sont répondues de manière approfondie et le personnel est amical et accommodant !",
  },
  {
    image: '/images/client2.webp',
    name: "Salim Benmoussa",
    status: "Client Satisfait",
    message: "L'équipe de Fort York Dentist est incroyable. Je suis patiente ici depuis quelques années et ils ont toujours su s’adapter à mon emploi du temps et à mes besoins. J'ai également eu une expérience positive avec la procédure Invisalign dans cette clinique.",
  },
  {
    image: '/images/client3.webp',
    name: "karim oureth",
    status: "Client Satisfait",
    message: "J'ai déménagé de Toronto et le Dr Hosseini me manque ! Compétente, gentille, rassurante et même un peu amusante ! Elle a pris le temps d'expliquer en détail ce qu'elle faisait pour m'aider. Un dentiste formidable et une équipe d'hygiénistes de qualité.",
  },
];

const ReviewSlider: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-blue-400">
        CE QUE NOS CLIENTS DISENT DE NOUS
      </h2>
      <div className="keen-slider" ref={sliderRef}>
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide p-6 bg-white rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-[100px] w-[100px] rounded-full flex items-center justify-center border-4 border-blue-400 relative overflow-hidden">
                <Image src={review.image} alt={`Image de ${review.name}`} fill className="rounded-full object-cover" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
            <p className="text-sm text-blue-600 mb-2">{review.status}</p>
            <p className="text-gray-600">{review.message}</p>
            <div className="mt-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
