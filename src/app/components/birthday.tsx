'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface FamilyCardProps {
  name: string;
  message: string;
  imageSrc: string | string[]; // Allow single image or array of images
  backgroundColor: string;
}

const FamilyCard: React.FC<FamilyCardProps> = ({ 
  name, 
  message, 
  imageSrc, 
  backgroundColor 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Determine if multiple images are provided
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];

  // Image carousel effect
  useEffect(() => {
    if (images.length > 1 && isFlipped) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [images, isFlipped]);

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
        {/* Initial view with only the name */}
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
            font-indie-flower 
            font-bold
          "
          style={{ backgroundColor }}
        >
          {name}
        </div>

        {/* Detailed view on click */}
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
            overflow-hidden
          "
          style={{ backgroundColor }}
        >
          <h2 className="text-2xl font-indie-flower font-bold mb-4">
            {name}
          </h2>
          
          {/* Image section with max height constraint */}
          <div className="relative w-full max-h-[50%] h-48 mb-4 overflow-hidden">
            {images.length > 1 ? (
              <div className="relative w-full h-full">
                <Image 
                  src={images[currentImageIndex]} 
                  alt={`Tarjeta de ${name}`}
                  fill
                  className="object-cover rounded-lg transition-opacity duration-500"
                />
                {images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {images.map((_, index) => (
                      <div 
                        key={index} 
                        className={`
                          w-2 h-2 rounded-full 
                          ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}
                        `}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Image 
                src={images[0]} 
                alt={`Tarjeta de ${name}`}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
          
          {/* Message section with vertical scroll if too long */}
          <div 
            className="
              w-full 
              max-h-[50%] 
              overflow-y-auto 
              text-lg 
              italic 
              pr-2 
              scrollbar-thin 
              scrollbar-thumb-gray-300 
              scrollbar-track-transparent
            "
          >
            {"\"" + message + "\""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyCard;