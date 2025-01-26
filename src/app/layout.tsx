import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Indie_Flower } from 'next/font/google';
import { Henny_Penny } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const indieFlower = Indie_Flower({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie-flower'
});

const hennyPenny = Henny_Penny({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-henny-penny'
});


export const metadata: Metadata = {
  title: "Happy Birthday Toren!",
  description: "Handsome cutie turning 29!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${indieFlower.variable} ${hennyPenny.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
