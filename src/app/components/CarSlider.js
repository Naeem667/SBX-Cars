"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const cars = [
  {
    name: "Porsche",
    year: 2020,
    src: "/car1.webp",
  },
  {
    name: "GT3 RS",
    year: 2021,
    src: "/car2.webp",
  },
  {
    name: "Land Rover",
    year: 2022,
    src: "/car3.webp",
  },
  {
    name: "McLaren",
    year: 2023,
    src: "/car4.webp",
  },
  {
    name: "Mercedes",
    year: 2024,
    src: "/car5.webp",
  },
  {
    name: "Ferrari",
    year: 2024,
    src: "/car6.webp",
  },
];

export default function CarSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[85%] mx-auto mt-8 overflow-hidden rounded-lg shadow-lg md:w-[90%]">
      <div className="absolute left-0 bottom-3 z-30 p-2 sm:p-4 bg-black bg-opacity-30 text-white rounded-lg m-2 sm:m-4 w-auto max-w-xs sm:max-w-md">
        <h2 className="text-lg sm:text-2xl font-bold">
          {cars[currentIndex].name}
        </h2>
        <p className="text-sm sm:text-lg">Year: {cars[currentIndex].year}</p>
      </div>

      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-full">
        {cars.map((car, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={car.src} alt={car.name} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute left-32 z-30 flex -translate-x-1/2 bottom-5 space-x-3">
        {cars.map((_, index) => (
          <button
            key={index}
            className={`w-6 h-[2px] ${
              index === currentIndex ? "bg-white" : "bg-gray-800"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          &#10094;
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          &#10095;
        </span>
      </button>
    </div>
  );
}
