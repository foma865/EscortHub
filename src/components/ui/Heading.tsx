import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const headingVariants = cva('font-bold tracking-wider', {
  variants: {
    size: {
      '4xl': 'text-h1',
      '3xl': 'text-h2',
      '2xl': 'text-h3',
      xl: 'text-h4',
    },
    color: {
      light: 'text-text-heading',
      dark: 'text-text-heading-dark',
    },
  },
  defaultVariants: {
    size: '3xl',
    color: 'dark',
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = 'h2', className, size, color, ...props }, ref) => {
    return (
      <Component
        className={twMerge(clsx(headingVariants({ size, color, className })))}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

export default Heading;
