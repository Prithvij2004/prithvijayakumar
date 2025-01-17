import {JetBrains_Mono } from 'next/font/google'
import "./globals.css"

const jetbrainsmono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: "Prithvi Jayakumar",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-[#FFF5EB] ${jetbrainsmono.className}`}
      >
        {children}
      </body>
    </html>
  );
}
