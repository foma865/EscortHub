import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const textVariants = cva('leading-relaxed', {
  variants: {
    size: {
      lg: 'text-body-lg',
      md: 'text-body-md',
      sm: 'text-body-sm',
    },
    color: {
      light: 'text-text-body',
      dark: 'text-text-body-dark',
      muted: 'text-text-muted',
      'muted-dark': 'text-text-muted-dark',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'dark',
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Component = 'p', className, size, color, ...props }, ref) => {
    return (
      <Component
        className={twMerge(clsx(textVariants({ size, color, className })))}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export default Text;
