import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={twMerge(clsx('container mx-auto max-w-sm md:max-w-md lg:max-w-xl', className))}>
      {children}
    </div>
  );
};

export default Container;
