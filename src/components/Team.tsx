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
    name: 'Dr. Sarah El Amrani',
    role: 'Médecin généraliste',
    bio: "Spécialiste en médecine préventive, elle accompagne chaque patient avec écoute et bienveillance.",
    image: '/team/female1.jpg',
    specialties: ['Médecine générale', 'Prévention', 'Suivi personnalisé'],
  },
  {
    id: 2,
    name: 'Dr. Youssef Benali',
    role: 'Urologue',
    bio: "Expert en urologie et santé masculine, il privilégie l'innovation et la pédagogie.",
    image: '/team/male1.jpg',
    specialties: ['Urologie', 'Dépistage', 'Chirurgie mini-invasive'],
  },
  {
    id: 3,
    name: 'Dr. Salma Kabbaj',
    role: 'Cardiologue',
    bio: "Passionnée par la prévention cardiovasculaire et le bien-être global.",
    image: '/team/female2.jpg',
    specialties: ['Cardiologie', 'Prévention', 'Éducation santé'],
  },
  {
    id: 4,
    name: 'Dr. Mehdi Othmani',
    role: 'Biologiste médical',
    bio: "Garant de la qualité des analyses et de la confidentialité des résultats.",
    image: '/team/male2.jpg',
    specialties: ['Biologie médicale', 'Analyses', 'Qualité'],
  },
  {
    id: 5,
    name: 'Nadia Lahlou',
    role: 'Infirmière coordinatrice',
    bio: "Au cœur du parcours patient, elle assure un accompagnement humain et rassurant.",
    image: '/team/female3.jpg',
    specialties: ['Soins infirmiers', 'Coordination', 'Écoute'],
  },
  {
    id: 6,
    name: 'Dr. Amine Idrissi',
    role: 'Psychologue clinicien',
    bio: "Spécialiste du soutien psychologique et de l'accompagnement thérapeutique.",
    image: '/team/male3.jpg',
    specialties: ['Psychologie', 'Thérapie', 'Accompagnement'],
  },
  {
    id: 7,
    name: 'Dr. Imane Bennis',
    role: 'Nutritionniste',
    bio: "Conseils nutritionnels personnalisés pour une santé durable.",
    image: '/team/female4.jpg',
    specialties: ['Nutrition', 'Éducation alimentaire', 'Prévention'],
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
    <section id="team" className="section bg-[#1c2431]">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="heading text-[#D1A24C]">
              Notre Équipe
            </motion.h2>
            <motion.p variants={itemVariants} className="subheading text-[#c4bcb4]">
              Des experts dédiés à votre santé et votre bien-être
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-[#2e333f] rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{member.name}</h3>
                      <span className="inline-block mt-1 px-3 py-1 rounded-lg bg-[#c4bcb4] text-[#1c2431] font-semibold text-base drop-shadow shadow-md">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#c4bcb4] mb-4">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Spécialités:</h4>
                    <ul className="space-y-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <li
                          key={specialtyIndex}
                          className="flex items-center text-[#c4bcb4]"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-[#D1A24C]"
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
