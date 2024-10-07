import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSmile, faHandsHelping, faCalendarCheck, faDiagnoses, faUserMd } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faHeart,
    title: 'Travailler avec le Cœur',
    description: 'Nous prenons soin de votre santé dentaire avec une grande compréhension afin que vous puissiez avoir le plus beau sourire.',
  },
  {
    icon: faSmile,
    title: 'Servir avec le Sourire',
    description: 'Le sourire ne disparaît jamais du visage des médecins, car ils veulent toujours créer une atmosphère confortable.',
  },
  {
    icon: faHandsHelping,
    title: 'Aide Disponible',
    description: 'Nous sommes prêts à vérifier tout problème dentaire à tout moment de la journée, même les week-ends et les jours fériés.',
  },
  {
    icon: faCalendarCheck,
    title: 'Bilan Annuel',
    description: 'Nous offrons un bilan annuel de la santé dentaire et proposons de nombreuses promotions.',
  },
  {
    icon: faDiagnoses,
    title: 'Diagnostic Précis',
    description: 'Lorsque vos dents sont endommagées, nous utilisons des outils modernes pour détecter la zone et fournir un traitement.',
  },
  {
    icon: faUserMd,
    title: 'Médecins Qualifiés',
    description: 'Nos médecins offrent tous types de services et se tiennent constamment informés des nouvelles technologies.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-blue-400 font-semibold text-lg">POURQUOI NOUS CHOISIR</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Ce qui Nous Rend Différents
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={feature.icon} className="h-10 w-10 text-teal-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
