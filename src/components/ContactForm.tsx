'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from './ui/Button';
import Heading from './ui/Heading';
import Text from './ui/Text';

type Inputs = {
  name: string;
  contact: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const inputClasses = "w-full p-3 bg-ui-background-light border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-body-dark";

  return (
    <div className="w-full">
      <Heading as="h3" size="2xl" className="text-center mb-2">Оставить заявку</Heading>
      <Text color="muted-dark" className="text-center mb-6">Менеджер свяжется с вами в ближайшее время.</Text>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input 
            placeholder="Ваше имя"
            {...register("name", { required: "Это поле обязательно" })} 
            className={inputClasses}
          />
          {errors.name && <Text size="sm" className="text-red-500 mt-1">{errors.name.message}</Text>}
        </div>
        <div>
          <input 
            placeholder="Контакт (Telegram / WhatsApp)"
            {...register("contact", { required: "Это поле обязательно" })} 
            className={inputClasses}
          />
          {errors.contact && <Text size="sm" className="text-red-500 mt-1">{errors.contact.message}</Text>}
        </div>
        <div>
          <textarea 
            placeholder="Кратко опишите ваш запрос"
            {...register("message")} 
            className={`${inputClasses} h-32`}
          />
        </div>
        <Button type="submit" className="w-full" size="lg">Отправить</Button>
      </form>
    </div>
  );
};

export default ContactForm;
