'use client';

import React from 'react';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], weight: "700" });

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-black h-[600px]"
      style={{ backgroundImage: "url('/images/model-2.jpg')" }}
    >
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center px-40 bg-black/30">
        {/* Заголовок */}
        <h1
          className={`${playfair.className} text-6xl font-bold mb-6 text-white`}
          style={{ textAlign: "left" }}
        >
          Спутницы для важного мероприятия, на отдых & вечеринку
        </h1>

        {/* Подзаголовок */}
        <p
          className={`${playfair.className} text-2xl font-normal mb-8 text-white`}
          style={{ textAlign: "left" }}
        >
          Выбирайте эмоции и легкость
        </p>

        {/* Кнопка */}
        <div className="text-left">
          <a
            href="/catalog"
            className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Каталог
          </a>
        </div>
      </div>
    </section>
  );
}
