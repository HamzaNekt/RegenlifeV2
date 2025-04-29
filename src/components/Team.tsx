import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Fondatrice & Médecin Intégratif',
    bio: 'Dr. Johnson combine plus de 15 ans d\'expérience en médecine conventionnelle avec des approches holistiques pour offrir des soins personnalisés.',
    image: '/team/sarah.jpg',
    specialties: ['Médecine fonctionnelle', 'Nutrition clinique', 'Hormonothérapie bioidentique'],
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Médecin & Spécialiste en Longévité',
    bio: 'Dr. Chen se spécialise dans les approches innovantes pour optimiser la santé et ralentir le processus de vieillissement.',
    image: '/team/michael.jpg',
    specialties: ['Médecine anti-âge', 'Optimisation des performances', 'Thérapie cellulaire'],
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Naturopathe & Nutritionniste',
    bio: 'Dr. Rodriguez utilise des approches naturelles pour traiter les causes profondes des problèmes de santé.',
    image: '/team/emily.jpg',
    specialties: ['Naturopathie', 'Nutrition thérapeutique', 'Détoxification'],
  },
];

const Team = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="team" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="heading">
              Notre Équipe
            </motion.h2>
            <motion.p variants={itemVariants} className="subheading">
              Des experts dédiés à votre santé et votre bien-être
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-primary-200">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Spécialités:</h4>
                    <ul className="space-y-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <li
                          key={specialtyIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 