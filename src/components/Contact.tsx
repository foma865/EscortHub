'use client';

import React, { useState } from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import Heading from './ui/Heading';
import { Button } from './ui/Button';

// Плавная анимация перехода
const transition: Transition = { duration: 0.6, ease: 'easeOut' };

// Анимация контейнера с задержкой для детей
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Анимация каждой карточки: подъём + лёгкая тень при появлении
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
    transition,
  },
};

const WhyUsCustom: React.FC = () => {
  const [formData, setFormData] = useState({
    city: '',
    eventType: '',
    date: '',
    time: '',
    contact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    alert('Заявка отправлена!');
    setFormData({ city: '', eventType: '', date: '', time: '', contact: '' });
  };

  return (
    <section className="w-full bg-ui-background-light py-12 md:py-20">
      <motion.div
        className="grid md:grid-cols-2 gap-6 px-4 md:px-12 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Карточка 1: Форма заявки */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-between rounded-2xl border 
                     backdrop-blur-lg bg-white/20 border-white/30 shadow-xl 
                     p-6 gap-4 max-w-md mx-auto w-full"
        >
          <Heading as="h3" size="2xl" color="dark" className="mb-2">
            Заполните форму заявки
          </Heading>

          <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
            {['city', 'eventType', 'date', 'time', 'contact'].map((field) => (
              <div key={field} className="flex flex-col gap-1 w-full">
                <label className="text-gray-600 text-sm">
                  {field === 'city'
                    ? 'Город'
                    : field === 'eventType'
                    ? 'Тип мероприятия'
                    : field === 'date'
                    ? 'Дата'
                    : field === 'time'
                    ? 'Время'
                    : 'Контакт для связи'}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="p-1.5 text-sm rounded-md border border-gray-300 
                             focus:outline-none focus:ring-1 focus:ring-brand-primary w-full"
                  required
                />
              </div>
            ))}
            <Button type="submit" className="mt-2 w-full">
              Отправить заявку
            </Button>
          </form>
        </motion.div>

        {/* Карточка 2: Поводы для сопровождения */}
       <motion.div
  variants={cardVariants}
  className="flex flex-col justify-between rounded-2xl border 
             backdrop-blur-lg bg-white/20 border-white/30 shadow-xl 
             p-6 gap-4 max-w-md mx-auto w-full"
>
  <Heading as="h3" size="2xl" color="dark" className="mb-4">
    Поводы для сопровождения
  </Heading>

  <ul className="flex flex-col gap-3 text-gray-700 text-sm">
    <li>Романтические свидания и встречи</li>
    <li>Официальные и публичные мероприятия</li>
    <li>Яркие вечеринки и закрытые тусовки</li>
    <li>Совместный отпуск или путешествия</li>
    <li>Развлечения и досуг</li>
  </ul>

  <Button className="mt-4 w-full">Оформить сейчас</Button>
</motion.div>

      </motion.div>
    </section>
  );
};

export default WhyUsCustom;
