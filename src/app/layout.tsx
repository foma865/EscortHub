import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Modal from '@/components/ui/Modal';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Премиальный сервис сопровождения | Ваш идеальный досуг',
  description: 'Элитные спутницы для любых событий: от деловых встреч до светских раутов. Гарантия конфиденциальности и безупречного сервиса.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-ui-background text-text-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Modal>
          <ContactForm />
        </Modal>
      </body>
    </html>
  );
}
