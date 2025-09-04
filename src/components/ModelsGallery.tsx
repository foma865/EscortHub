'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Heading from './ui/Heading';
import Text from './ui/Text';

const models = [
  { src: '/images/model-1.jpg', name: 'Anastasia' },
  { src: '/images/model-2.jpg', name: 'Katerina' },
  { src: '/images/model-3.jpg', name: 'Isabella' },
  { src: '/images/model-4.jpg', name: 'Veronika' },
  { src: '/images/model-5.jpg', name: 'Elizaveta' },
];

const Marquee = ({ images, duration }: { images: typeof models, duration: number }) => {
  return (
    <div className="flex" style={{ animation: `marquee ${duration}s linear infinite` }}>
      {images.map((model, index) => (
        <div key={index} className="relative flex-shrink-0 w-64 h-96 mx-4">
          <Image
            src={model.src}
            alt={model.name}
            fill
            className="object-cover rounded-lg"
            sizes="25vw"
          />
        </div>
      ))}
    </div>
  );
};

const ModelsGallery = () => {
  return (
    <section className="py-24 bg-ui-background overflow-hidden">
      <div className="text-center mb-12">
        <Heading as="h2" size="3xl" color="light" className="font-serif">
          Наша Галерея
        </Heading>
        <Text color="muted">На сайте представлены только примеры анкет в ознакомительных целях</Text>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          <Marquee images={[...models, ...models]} duration={50} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ui-background via-transparent to-ui-background" />
      </div>
    </section>
  );
};

export default ModelsGallery;
