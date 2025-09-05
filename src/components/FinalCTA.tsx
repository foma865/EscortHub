'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModalStore } from '@/stores/useModalStore';
import Section from './Section';
import { Button } from './ui/Button';
import Heading from './ui/Heading';
import Text from './ui/Text';

const FinalCTA = () => {
  const { openModal } = useModalStore();

  return (
    <Section className="bg-ui-background-light">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Heading as="h2" size="3xl" color="dark" className="font-serif mb-4">
            Организуем встречу 
            с вашими индивидуальными предпочтениями
          </Heading>
        </motion.div>

        {/* Подзаголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Text size="lg" color="muted-dark" className="max-w-2xl mx-auto mb-8">
            Оставьте заявку, и наш менеджер подберет для вас идеальную спутницу, 
            учитывая все ваши пожелания.
          </Text>
        </motion.div>

      </motion.div>
    </Section>
  );
};

;

export default FinalCTA;
