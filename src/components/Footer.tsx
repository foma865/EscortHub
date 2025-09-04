import React from 'react';
import { Twitter, Instagram,Youtube } from 'lucide-react';
import Container from './ui/Container';
import Text from './ui/Text';

const Footer = () => {
  return (
    <footer className="bg-ui-surface py-8">
      <Container className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div>
          <div className="font-serif text-2xl font-bold text-text-heading mb-2">
            Elysian
          </div>
          <Text color="muted" size="sm">© {new Date().getFullYear()} Все права защищены.</Text>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-text-muted hover:text-brand-primary transition-colors"><Twitter /></a>
          <a href="#" className="text-text-muted hover:text-brand-primary transition-colors"><Instagram /></a>
          <a href="#" className="text-text-muted hover:text-brand-primary transition-colors"><Youtube /></a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
