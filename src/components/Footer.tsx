'use client';

import React from 'react';
import { Button } from './ui/Button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-lg bg-white/20 shadow-inner mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-full px-4 py-6 md:py-4 gap-4 md:gap-0">
        
        {/* Левая группа */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-800">
          <span>Россия</span>
          <Link href="https://t.me/yourtelegram" target="_blank" className="hover:underline">
            Telegram
          </Link>
          <Link href="https://wa.me/1234567890" target="_blank" className="hover:underline">
            WhatsApp
          </Link>
          <a href="tel:+71234567890" className="font-semibold hover:underline">
            +7 (123) 456-78-90
          </a>
        </div>

        {/* Правая группа: кнопки */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border border-gray-800 text-gray-800 hover:bg-gray-100 hover:border-gray-900"
          >
            Каталог
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="bg-gray-800 text-white hover:bg-gray-900"
            onClick={() => window.history.back()}
          >
            Назад
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



