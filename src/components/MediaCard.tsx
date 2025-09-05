'use client';

import React from 'react';
import Image from 'next/image';

const ArticleBlock: React.FC = () => {
  return (
    <div className="flex flex-col md:px-45 md:flex-row items-start gap-6  bg-gray-50 rounded-lg shadow-md">
      {/* Фото слева */}
      <div className="flex-shrink-0 w-full md:w-100 h-150 relative">
        <Image
          src="/images/model-1.jpg"
          alt="Фото статьи"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Текст справа */}
      <div className="flex flex-col gap-4 text-left md:text-left">
        <h2 className="text-2xl font-bold">Заголовок статьи</h2>
        <p className="text-gray-700">
          Здесь можно написать очень длинный текст, прямо как настоящая статья. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-700">
          Второй абзац текста, продолжение статьи. Можно вставлять сколько угодно абзацев, списки, ссылки и даже небольшие таблицы.
        </p>
      </div>
    </div>
  );
};

export default ArticleBlock;
