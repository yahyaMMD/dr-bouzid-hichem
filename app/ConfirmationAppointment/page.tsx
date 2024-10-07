'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie';
import * as animationData from '../../public/animations/successAnimation.json';

const ConfirmationPage: React.FC = () => {
  const router = useRouter();
  
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleHomeRedirect = () => {
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-600">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h1 className="text-4xl font-bold text-gray-800 animate-bounce">Rendez-vous confirmé!</h1>
        <p className="mt-4 text-lg text-gray-600">Merci d&#39;avoir pris votre rendez-vous. Au plaisir de vous voir !</p>
        <div className="mt-8">
          <button
            onClick={handleHomeRedirect}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Retour à l&#39;accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
