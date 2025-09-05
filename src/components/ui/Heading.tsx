import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const headingVariants = cva('font-bold tracking-wider', {
  variants: {
    size: {
      '4xl': 'text-4xl',
      '3xl': 'text-3xl',
      '2xl': 'text-2xl',
      xl: 'text-xl',
    },
    color: {
      light: 'text-gray-500',
      dark: 'text-gray-900',
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
        className={twMerge(headingVariants({ size, color }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
