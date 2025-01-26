'use client';
import React from 'react';
import FamilyCard from './components/birthday';
import ConfettiBackground from './components/confetti';

const familyMembers = [
  // Familia
  {
    name: "Mom",
    message: "In January 1996, the world was a different place. There was no Google yet. More significantly, there was no Toren James Darby yet, at least not visibly. How lucky the world got to be on the 27th  of January",
    imageSrc: ["/mom.JPG", "/mom2.jpg", "/mom3.jpg"],
    backgroundColor: "#f8a792"
  },
  {
    name: "Dad", 
    message: "Dear Toren, You are a bright light, a warm feeling, and a joy. Almost every day you bring laughter and comfort to our lives. Smiles and hugs.",
    imageSrc: ["/dad.jpg", "/dad2.jpg", "/dad3.jpg"],
    backgroundColor: "#84906c"
  },
  {
    name: "Aiden",
    imageSrc: "/aiden.png", 
    backgroundColor: "#f7e4c3"
  },
  {
    name: "Tiffany",
    message: "Happy bday Toren! I hope you have a fantastic day filled with lots of cake and fun!",
    backgroundColor: "#e6e6e6"
  },
  
  {
    name: "Rosa/Caramel",
    message: "Meow, meow meou purr meow purr purr puuurrrr!.",
    imageSrc: ["/rosa.jpg", "/rosa2.jpg", "/rosa3.jpg"],
    backgroundColor: "#f8a792"
  },
  {
    name: "Mabel",
    message: "",
    imageSrc: ["/mabel.jpg", "/mabel2.jpg", "/mabel3.jpg"],
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
    message: "Happy birthday, Tory! I hope you have a great time today and that all your wishes come true. Save some cake for me, jijiji.",
    imageSrc: ["/paloma.jpeg", "/paloma2.jpeg"],
    backgroundColor: "#e6e6e6"
  },

  {
    name: "Mama & Neto",
    message: "Dear Tory, on this very special day, we want to wish you a very happy birthday. From the bottom of our hearts, Ernesto and I want to thank you for being such a wonderful person and for taking such loving and dedicated care of our daughter Mabel. It is a true gift for us to know that she is in the hands of someone so kind, attentive, and full of admirable qualities. You are more than a son-in-law; you are an important part of our family, and we love you very much. We hope that this new year of life is full of blessings, joy, and unforgettable moments. Even though distance separates us physically, we send you a big hug from Monterrey, along with all our love. Enjoy your day to the fullest, because you deserve it. PS. Greetings to your parents, your brother, and his girlfriend. Celebrate a lot.",
    imageSrc: "/mama.jpg",
    backgroundColor: "#f8a792"
  },
  {
    name: "Uncle Rick",
    message: "",
    backgroundColor: "#84906c"
  },
  {
    name: "Noureddine",
    message: "Happy Birthday Toren!! Wishing you a day filled with joy, laughter, and everything that makes you happy and content! It is truly a pleasure to not only call you a valued, bright and reliable mind as a colleague, but also a wonderful friend. May this year bring you lots of happiness, health, and exciting impactful outcomes and opportunities. Cheers to many more milestones together, and here's to celebrating you today! 🎉",
    backgroundColor: "#f7e4c3"
  },
  {
    name: "James",
    message: "happy birthday dood. have fun being old",
    imageSrc: "/james.JPG",
    backgroundColor: "#e6e6e6"
  },
  {
    name: "Charlotte",
    message: "HAPPIEST BIRTHDAY TOREN MY FRIEND. I SEND YOU LOTS LOTS OF ELECTRICITY & BRAIN POWER + ENERGY TO HELP YOU NAVIGATE THE BEST BDAY YEAR — LUFF LUFF LUFF TO YOU & MABEL",
    backgroundColor: "#f8a792"
  },
  {
    name: "Aunt Andy",
    message: "Happy birthday nephew, may there be many more years of blessings 🎂🥂✨",
    backgroundColor: "#84906c"
  },


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
          bg-black
          p-6
          rounded-xl
          font-henny-penny 
          text-family-peach
          mb-12 
          text-center 
          z-10 
          relative
        "
      >
        Happy 29th Birthday, Toren! 🎂
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