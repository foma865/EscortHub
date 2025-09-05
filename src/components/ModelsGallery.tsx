"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

const models = [
  { src: "/images/model-1.jpg", name: "Anastasia" },
  { src: "/images/model-2.jpg", name: "Katerina" },
  { src: "/images/model-3.jpg", name: "Isabella" },
  { src: "/images/model-4.jpg", name: "Veronika" },
  { src: "/images/model-5.jpg", name: "Elizaveta" },
  { src: "/images/model-1.jpg", name: "Anastasia" },
  { src: "/images/model-2.jpg", name: "Katerina" },
  { src: "/images/model-3.jpg", name: "Isabella" },
  { src: "/images/model-4.jpg", name: "Veronika" },
  { src: "/images/model-5.jpg", name: "Elizaveta" },
];

const OverlapGallery = () => {
  return (
    <section className="py-24 bg-ui-background overflow-hidden">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <Heading as="h2" size="3xl" color="darck" className="font-serif">
          Наша Галерея
        </Heading>
        <Text color="muted">
          На сайте представлены только примеры анкет в ознакомительных целях
        </Text>
      </div>

      {/* Галерея с перекрытием */}
      <div className="flex justify-center items-center relative h-[400px]">
        {models.map((model, index) => (
          <motion.div
            key={index}
            className="absolute w-64 h-96 rounded-2xl overflow-hidden"
            style={{ left: `${index * 10}%` }} // перекрытие на 25%
            whileHover={{
              scale: 1.1,
              zIndex: 50,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={model.src}
              alt={model.name}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OverlapGallery;
