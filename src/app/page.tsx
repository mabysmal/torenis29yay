'use client';
import React from 'react';
import FamilyCard from './components/birthday';
import ConfettiBackground from './components/confetti';

const familyMembers = [
  // Familia
  {
    name: "Mamá",
    message: "Mi amor, eres la luz que ilumina nuestra familia. ¡Feliz cumpleaños!",
    imageSrc: "/mama.jpg",
    backgroundColor: "#f8a792"
  },
  {
    name: "Papá", 
    message: "Eres mi héroe, mi mejor amigo. Gracias por todo tu amor.",
    imageSrc: "/papa.jpg",
    backgroundColor: "#84906c"
  },
  {
    name: "Hermana",
    message: "Juntas siempre, tu sonrisa me hace feliz. Te amo.",
    imageSrc: "/hermana.jpg", 
    backgroundColor: "#f7e4c3"
  },
  {
    name: "Yo",
    message: "Gracias por ser mi familia, por su amor incondicional.",
    imageSrc: "/yo.jpg",
    backgroundColor: "#e6e6e6"
  },
  
  // Amigos del esposo
  {
    name: "Carlos",
    message: "Amigo, eres como un hermano. Celebro tu vida hoy y siempre.",
    imageSrc: "/carlos.jpg",
    backgroundColor: "#f8a792"
  },
  {
    name: "Daniel",
    message: "Compañero de aventuras, gracias por todos los momentos increíbles.",
    imageSrc: "/daniel.jpg",
    backgroundColor: "#84906c"
  },
  {
    name: "Fernando",
    message: "Tu amistad es un regalo. ¡Feliz cumpleaños, hermano!",
    imageSrc: "/fernando.jpg",
    backgroundColor: "#f7e4c3"
  },
  {
    name: "Javier",
    message: "Cada conversación contigo es una aventura. ¡Te quiero, amigo!",
    imageSrc: "/javier.jpg",
    backgroundColor: "#e6e6e6"
  },
  
  // Familia extendida o más amigos
  {
    name: "Tía María",
    message: "Desde pequeño te he visto crecer. Estoy tan orgullosa de ti.",
    imageSrc: "/tia-maria.jpg",
    backgroundColor: "#f8a792"
  },
  {
    name: "Abuelo José",
    message: "Eres el orgullo de nuestra familia. Bendiciones en tu día.",
    imageSrc: "/abuelo-jose.jpg",
    backgroundColor: "#84906c"
  },
  {
    name: "Primo Roberto",
    message: "Juntos desde la infancia, siempre seremos familia.",
    imageSrc: "/primo-roberto.jpg",
    backgroundColor: "#f7e4c3"
  },
  {
    name: "Andrea",
    message: "Tu amistad significa el mundo para mí. ¡Feliz día!",
    imageSrc: "/andrea.jpg",
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