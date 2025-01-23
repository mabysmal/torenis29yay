'use client';
import React from 'react';
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
  return (
    <div 
      className={`
        flex flex-col 
        rounded-xl 
        shadow-lg 
        overflow-hidden 
        transition-transform 
        hover:scale-105 
        w-80 
        mx-4 my-4
      `} 
      style={{ backgroundColor }}
    >
      <div className="relative w-full h-64">
        <Image 
          src={imageSrc} 
          alt={`Tarjeta de ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-birthday font-bold mb-4">
          {name}
        </h2>
        <p className="text-lg italic">
          "{message}"
        </p>
      </div>
    </div>
  );
};

export default FamilyCard;