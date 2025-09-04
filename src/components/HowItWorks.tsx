'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Heading from './ui/Heading';
import Text from './ui/Text';

const steps = [
  { title: 'Оставьте заявку', description: 'Заполните короткую форму на сайте, и мы начнем работу.' },
  { title: 'Уточнение деталей', description: 'Личный менеджер свяжется с вами для обсуждения всех нюансов и пожеланий.' },
  { title: 'Подбор спутницы', description: 'Мы предложим вам несколько анкет девушек, идеально подходящих под ваш запрос.' },
  { title: 'Назначение встречи', description: 'Вы выбираете время и место, мы подтверждаем все детали с моделью.' },
  { title: 'Ваш идеальный вечер', description: 'Модель прибывает в назначенное время. Наслаждайтесь.' },
];

const HowItWorks = () => {
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Section className="bg-ui-background">
      <Heading as="h2" size="3xl" color="light" className="font-serif text-center mb-16">
        Всего 5 шагов к идеальному вечеру
      </Heading>
      <div className="relative">
        <motion.div 
          className="absolute left-4 md:left-1/2 w-0.5 bg-brand-primary/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={lineVariants}
        />
        <motion.div 
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-12 md:pl-0">
              <div className="md:flex md:items-center md:space-x-8">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:text-left md:pl-8'}`}>
                  <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-brand-primary rounded-full transform -translate-x-1/2" />
                  <Text color="muted" className="mb-1">Шаг {index + 1}</Text>
                  <Heading as="h3" size="xl" color="light">{step.title}</Heading>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-1 md:text-right'}`}>
                  <Text color="light" className="mt-2">{step.description}</Text>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default HowItWorks;
