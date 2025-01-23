'use client';
import React from 'react';
import FamilyCard from './components/birthday';
import ConfettiBackground from './components/confetti';

const familyMembers = [
  {
    name: "Mamá",
    message: "Mi amor, eres la luz que ilumina nuestra familia. ¡Feliz cumpleaños!",
    imageSrc: "/mama.jpg",
    backgroundColor: "#f7e4c3"
  },
  {
    name: "Papá", 
    message: "Eres mi héroe, mi mejor amigo. Gracias por todo tu amor.",
    imageSrc: "/papa.jpg",
    backgroundColor: "#f8a792"
  },
  {
    name: "Hermana",
    message: "Juntas siempre, tu sonrisa me hace feliz. Te amo.",
    imageSrc: "/hermana.jpg", 
    backgroundColor: "#84906c"
  },
  {
    name: "Yo",
    message: "Gracias por ser mi familia, por su amor incondicional.",
    imageSrc: "/yo.jpg",
    backgroundColor: "#e6e6e6"
  }
];

export default function BirthdayPage() {
  return (
    <div 
      className="
        min-h-screen 
        flex 
        flex-col 
        items-center 
        justify-center 
        p-8 
        relative
        overflow-hidden
      "
    >
      <ConfettiBackground />
      <h1 
        className="
          text-5xl 
          font-birthday 
          text-family-peach 
          mb-12 
          text-center 
          z-10 
          relative
        "
      >
        ¡Feliz Cumpleaños! 🎂
      </h1>
      <div 
        className="
          flex 
          flex-wrap 
          justify-center 
          items-center 
          gap-8 
          z-10 
          relative
        "
      >
        {familyMembers.map((member, index) => (
          <FamilyCard 
            key={index}
            name={member.name}
            message={member.message}
            imageSrc={member.imageSrc}
            backgroundColor={member.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}