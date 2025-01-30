import Image from "next/image";
import { Star } from "lucide-react";

const AuctionCard = ({ car }) => {
  return (
    <div className="relative shadow-lg overflow-hidden w-96 md:w-80 h-[22rem]">
      <div className="relative h-72 w-full hover:scale-105 transition-transform">
        <Image
          src={car.image}
          alt={`Image of ${car.brand} ${car.model}`}
          layout="intrinsic"
          width={800}
          height={384}
          objectFit="cover"
        />
        <div className="absolute flex top-3 right-3 bg-black text-white px-3 py-1 rounded-lg">
          <Star className="me-1" /> {car.likes}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-white">
          <p className="text-sm">{car.year}</p>
          <h3 className="text-xl font-bold uppercase">{car.brand}</h3>
          <p className="text-sm">{car.model}</p>
          <p className="text-sm">{car.location}</p>
        </div>
      </div>
      <div className="flex justify-between mx-4 items-center mt-2">
        <p className="text-lg font-bold">{car.latestBid}</p>
        <p
          className={`text-sm font-bold ${
            car.timeLeft.includes(":") ? "text-red-500" : "text-yellow-500"
          }`}
        >
          {car.timeLeft}
        </p>
      </div>
    </div>
  );
};

const AuctionList = () => {
  const cars = [
    {
      image: "/McLaren.webp",
      likes: 137,
      year: 2019,
      brand: "MCLAREN",
      model: "Senna XP - #1 of 10",
      location: "HAMBURG, GERMANY",
      latestBid: "€825,000",
      timeLeft: "02:54:19",
    },
    {
      image: "/Mercedes.webp",
      likes: 144,
      year: 2021,
      brand: "MERCEDES-AMG",
      model: "GT Black Series",
      location: "DUBAI, UNITED ARAB EMIRATES",
      latestBid: "US$28,000",
      timeLeft: "7 days",
    },
    {
      image: "/prosche.webp",
      likes: 173,
      year: 2024,
      brand: "PORSCHE",
      model: '911 (992) GT3 RS "Weissach"',
      location: "DUBAI, UNITED ARAB EMIRATES",
      latestBid: "US$100,000",
      timeLeft: "12 days",
    },
    {
      image: "/Audi.webp",
      likes: 173,
      year: 2020,
      brand: "AUDI",
      model: 'R8 5.2 Quattro V10 2D Coupe"',
      location: "Troy, Michigan,USA",
      latestBid: "US$10,000",
      timeLeft: "12 days",
    },
    {
      image: "/Jeff.webp",
      likes: 173,
      year: 2024,
      brand: "BMW",
      model: "M850i xDrive Gran Coupe",
      location: "Apeldoorn, Gelderland, Netherlands",
      latestBid: "US$700,000",
      timeLeft: "12 days",
    },
    {
      image: "/Gabriel.webp",
      likes: 173,
      year: 2021,
      brand: "ASTON",
      model: "DB% Continuation Goldfinger ED",
      location: "Zug, Switzerland",
      latestBid: "US$400,000",
      timeLeft: "8 days",
    },
  ];

  return (
    <>
      <h3 className="ml-7 mt-5">
        <span className="font-bold">Auctions</span> Country:{" "}
        <span className="underline">ALL</span>
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-6 overflow-x-auto p-6">
        {cars.map((car, index) => (
          <AuctionCard key={index} car={car} />
        ))}
      </div>
    </>
  );
};

export default AuctionList;
