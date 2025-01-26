'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface FamilyCardProps {
  name: string;
  message: string;
  imageSrc: string;
  backgroundColor: string;
}

const FamilyCard: React.FC<FamilyCardProps> = ({ 
  name, 
  message, 
  imageSrc, 
  backgroundColor 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`
        relative 
        w-80 
        h-96 
        perspective-1000 
        mx-4 
        my-4
        cursor-pointer
        transition-all 
        duration-500 
        hover:scale-110 
        hover:brightness-110
      `}
      onClick={toggleCard}
    >
      <div 
        className={`
          absolute 
          w-full 
          h-full 
          transition-transform 
          duration-700 
          transform-style-3d 
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Vista inicial con solo el nombre */}
        <div 
          className="
            absolute 
            w-full 
            h-full 
            backface-hidden 
            rounded-xl 
            flex 
            items-center 
            justify-center 
            text-3xl 
            font-birthday 
            font-bold
          "
          style={{ backgroundColor }}
        >
          {name}
        </div>

        {/* Vista detallada al hacer clic */}
        <div 
          className="
            absolute 
            w-full 
            h-full 
            backface-hidden 
            rotate-y-180 
            flex 
            flex-col 
            items-center 
            justify-center 
            text-center 
            p-6 
            rounded-xl
          "
          style={{ backgroundColor }}
        >
          <h2 className="text-2xl font-birthday font-bold mb-4">
            {name}
          </h2>
          <div className="relative w-full h-48 mb-4">
            <Image 
              src={imageSrc} 
              alt={`Tarjeta de ${name}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-lg italic">
            {"\"" + message + "\""} {/* Usando escape de comillas */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamilyCard;