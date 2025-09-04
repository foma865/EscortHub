'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModalStore } from '@/stores/useModalStore';
import { Button } from './ui/Button';
import Container from './ui/Container';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const { openModal } = useModalStore();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnimatePresence>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`transition-colors duration-300 ${
            scrolled ? 'bg-ui-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
          }`}
        >
          <Container className="flex items-center justify-between py-4 relative">
            
            {/* Левая часть */}
            <div className="flex items-center space-x-6">
              <span>Россия</span>
              <Link href="https://t.me/yourtelegram" target="_blank" className="hover:underline">
                Telegram
              </Link>
              <Link href="https://wa.me/1234567890" target="_blank" className="hover:underline">
                WhatsApp
              </Link>
              <a href="tel:+71234567890" className="font-semibold">
                +7 (123) 456-78-90
              </a>
            </div>

            {/* Правая часть */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">Каталог</Button>
              <Button variant="secondary" size="sm" onClick={openModal}>Связь</Button>
            </div>

            {/* Бургер для мобильных */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Мобильное меню */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg flex flex-col p-4 space-y-2 md:hidden z-50"
                >
                  <span>Россия</span>
                  <Link href="https://t.me/yourtelegram" target="_blank" className="hover:underline">
                    Telegram
                  </Link>
                  <Link href="https://wa.me/1234567890" target="_blank" className="hover:underline">
                    WhatsApp
                  </Link>
                  <a href="tel:+71234567890" className="font-semibold">
                    +7 (123) 456-78-90
                  </a>
                  <Button variant="secondary" size="sm" onClick={openModal}>
                    Связаться
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

          </Container>
        </motion.div>
      </AnimatePresence>
    </header>
  );
};

export default Header;
