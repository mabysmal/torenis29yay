'use client';
import React from 'react';
import FamilyCard from './components/birthday';
import ConfettiBackground from './components/confetti';

const familyMembers = [
  // Familia
  {
    name: "Mom",
    message: "In January 1996, the world was a different place. There was no Google yet. More significantly, there was no Toren James Darby yet, at least not visibly. How lucky the world got to be on the 27th  of January",
    imageSrc: "/mom.JPG",
    backgroundColor: "#f8a792"
  },
  {
    name: "Dad", 
    message: "Dear Toren, You are a bright light, a warm feeling, and a joy. Almost every day you bring laughter and comfort to our lives. Smiles and hugs.",
    imageSrc: "/dad.jpg",
    backgroundColor: "#84906c"
  },
  {
    name: "Aiden",
    message: "",
    imageSrc: "/aiden.png", 
    backgroundColor: "#f7e4c3"
  },
  {
    name: "Tiffany",
    message: "",
    imageSrc: "/tiff.png",
    backgroundColor: "#e6e6e6"
  },
  
  {
    name: "Rosa/Caramel",
    message: "Meow.",
    imageSrc: "/rosa.png",
    backgroundColor: "#f8a792"
  },
  {
    name: "Mabel",
    message: "",
    imageSrc: "/me.png",
    backgroundColor: "#84906c"
  },
  {
    name: "Papa",
    message: "Tory, congratulations on your birthday!!! I send you a warm hug!! I hope you spend a very special day in the company of Mabelita and your family!!! Congratulations!!!",
    imageSrc: "/papa.jpeg",
    backgroundColor: "#f7e4c3"
  },
  {
    name: "Paloma",
    message: "",
    imageSrc: "/paloma.png",
    backgroundColor: "#e6e6e6"
  },
  
  // Familia extendida o más amigos
//   {
//     name: "Tía María",
//     message: "Desde pequeño te he visto crecer. Estoy tan orgullosa de ti.",
//     imageSrc: "/tia-maria.jpg",
//     backgroundColor: "#f8a792"
//   },
//   {
//     name: "Abuelo José",
//     message: "Eres el orgullo de nuestra familia. Bendiciones en tu día.",
//     imageSrc: "/abuelo-jose.jpg",
//     backgroundColor: "#84906c"
//   },
//   {
//     name: "Primo Roberto",
//     message: "Juntos desde la infancia, siempre seremos familia.",
//     imageSrc: "/primo-roberto.jpg",
//     backgroundColor: "#f7e4c3"
//   },
//   {
//     name: "Andrea",
//     message: "Tu amistad significa el mundo para mí. ¡Feliz día!",
//     imageSrc: "/andrea.jpg",
//     backgroundColor: "#e6e6e6"
//   }


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