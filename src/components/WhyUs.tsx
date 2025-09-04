'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import Heading from './ui/Heading';
import Text from './ui/Text';

const features = [
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WhyUs = () => {
  return (
    <section className="w-full bg-ui-background-light py-20">
      <motion.div
        className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-[6.25rem] px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="aspect-square w-64 flex flex-col items-center justify-center text-center 
                       rounded-2xl border backdrop-blur-lg bg-white/20 border-white/30 shadow-xl 
                       transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="mb-4">{feature.icon}</div>
            <Heading as="h3" size="lg" color="dark" className="mb-2">
              {feature.title}
            </Heading>
            <Text color="muted-dark" className="text-sm">
              {feature.description}
            </Text>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyUs;
