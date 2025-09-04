import React from 'react';
import Container from './ui/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
