import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* 
  Создаем базовые стили кнопки с возможностью вариаций.
  cva позволяет задать варианты и значения по умолчанию.
*/
const buttonVariants = cva(
  // Базовые классы кнопки
  'inline-flex items-center justify-center rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      // Варианты внешнего вида кнопки
      variant: {
        primary: 'bg-brand-primary text-black hover:bg-brand-primary/90 focus:ring-brand-primary',
        secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/90 focus:ring-brand-secondary',
        // Обновленный outline вариант:
        // - border-[1px] → ровно 1px
        // - border-color и текст можно менять
        outline: 'border-[1px] border-brand-primary text-brand-primary hover:bg-brand-primary-light focus:ring-brand-primary',
      },
      // Варианты размера кнопки
      size: {
        default: 'py-3 px-8', // стандартный
        sm: 'py-2 px-4',      // маленький
        lg: 'py-4 px-10',     // большой
      },
    },
    // Значения по умолчанию
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

/* Интерфейс пропсов кнопки */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/* Компонент кнопки */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={twMerge(clsx(buttonVariants({ variant, size, className })))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

// Экспорт компонента и объект с вариантами
export { Button, buttonVariants };
