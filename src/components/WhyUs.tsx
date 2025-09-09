'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import Heading from './ui/Heading';
import Text from './ui/Text';

// тип для одной фичи
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-primary" />,
    title: '100% Конфиденциально',
    description:
      'Общение через личного менеджера гарантирует вашу анонимность и защищает от любых рисков.',
  },
  {
    icon: <Clock className="w-10 h-10 text-brand-primary" />,
    title: 'Экономия Вашего Времени',
    description:
      'Мы берём на себя все организационные моменты, от подбора до логистики встречи.',
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-brand-primary" />,
    title: 'Гарантия Качества',
    description:
      'Все модели проходят строгий отбор. Вы получаете премиальный сервис и незабываемые впечатления.',
  },
];

// контейнер с "stagger"
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// анимация карточки
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67], // эквивалент easeOut
    },
  },
};

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    }}
    className="flex flex-col items-center justify-center text-center 
               rounded-2xl border backdrop-blur-lg bg-white/30 border-white/30 shadow-lg 
               transition-all duration-300 hover:shadow-2xl p-6"
  >
    <div className="mb-4">{icon}</div>
    <Heading as="h3" size="xl" color="dark" className="mb-2">
      {title}
    </Heading>
    <Text color="muted-dark" className="text-sm leading-relaxed">
      {description}
    </Text>
  </motion.div>
);

const WhyUs: React.FC = () => {
  return (
    <section className="w-full bg-ui-background-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
