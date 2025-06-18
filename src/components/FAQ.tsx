import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and consulting services. Our team specializes in creating modern, scalable, and user-friendly solutions for businesses of all sizes.',
  },
  {
    id: 2,
    question: 'How long does it take to complete a project?',
    answer:
      'Project timelines vary depending on the scope and complexity. A typical website project can take 4-8 weeks, while larger applications may take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.',
  },
  {
    id: 3,
    question: 'Do you offer maintenance and support?',
    answer:
      'Yes, we offer ongoing maintenance and support services to ensure your digital solutions remain up-to-date and perform optimally. Our support packages include regular updates, security patches, and technical assistance.',
  },
  {
    id: 4,
    question: 'What is your pricing structure?',
    answer:
      'We offer customized pricing based on project requirements, scope, and complexity. We provide detailed quotes after understanding your needs and objectives. We also offer flexible payment plans and maintenance packages.',
  },
  {
    id: 5,
    question: 'How do you handle project communication?',
    answer:
      'We maintain transparent communication throughout the project lifecycle. We use project management tools, regular meetings, and progress reports to keep you informed. Our team is always available to address your concerns and questions.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading">Frequently Asked Questions</h2>
          <p className="subheading">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full text-left bg-gray-50 dark:bg-gray-800 rounded-lg p-6 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openId === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openId === item.id ? 'auto' : 0,
                    opacity: openId === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="btn inline-flex items-center"
          >
            Contact Us
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 
