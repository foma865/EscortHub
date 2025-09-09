'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModalStore } from '@/stores/useModalStore';
import { Button } from './ui/Button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { openModal } = useModalStore();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // эффект при скролле
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-white/40 shadow-md'
          : 'backdrop-blur-lg bg-white/20'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 py-4 md:px-8">
        {/* Левая группа: контакты */}
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base text-gray-800">
          <span>Россия</span>
          <Link
            href="https://t.me/yourtelegram"
            target="_blank"
            className="hover:underline"
          >
            Telegram
          </Link>
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            className="hover:underline"
          >
            WhatsApp
          </Link>
          <a
            href="tel:+71234567890"
            className="font-semibold hover:underline"
          >
            +7 (123) 456-78-90
          </a>
        </div>

        {/* Правая группа: кнопки */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/catalog">
            <Button
              variant="outline"
              size="sm"
              className="border border-gray-800 text-gray-800 hover:bg-gray-100 hover:border-gray-900"
            >
              Каталог
            </Button>
          </Link>
          <Button
            variant="secondary"
            size="sm"
            className="bg-gray-800 text-white hover:bg-gray-900"
            onClick={openModal}
          >
            Связь
          </Button>
        </div>

        {/* Кнопка-бургер */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur-lg shadow-md w-full px-4 py-4 flex flex-col gap-4 text-gray-800"
          >
            <Link
              href="https://t.me/yourtelegram"
              target="_blank"
              className="hover:underline"
            >
              Telegram
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              className="hover:underline"
            >
              WhatsApp
            </Link>
            <a
              href="tel:+71234567890"
              className="font-semibold hover:underline"
            >
              +7 (123) 456-78-90
            </a>
            <Link href="/catalog">
              <Button
                variant="outline"
                size="sm"
                className="border border-gray-800 text-gray-800 hover:bg-gray-100 hover:border-gray-900"
              >
                Каталог
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="sm"
              className="bg-gray-800 text-white hover:bg-gray-900"
              onClick={() => {
                openModal();
                setIsOpen(false); // закрыть меню после клика
              }}
            >
              Связь
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
