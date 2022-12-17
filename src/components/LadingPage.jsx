import React from "react";
import animals from "../images/animals.jpg";
import FloatingCard from "./FloatingCard";
import cat from "../images/cat.jpg";

const LadingPage = () => {
  return (
    <div className="relative mt-[180px] flex flex-row items-center mx-24">
      <div className="flex w-[350px] flex-col bg-[#C58940] p-8 rounded-lg">
        <h1 className="text-center   font-semibold">
          Soğuk kış aylarınde desteğinize ihyacımız var!
        </h1>
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores
          numquam repellat rerum minima ipsum itaque reprehenderit? Maiores
          nihil, qui molestias vitae minus eius voluptas atque ea labore
          voluptatibus aut?
        </p>
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores
          numquam repellat rerum minima ipsum itaque reprehenderit? Maiores
          nihil, qui molestias vitae minus eius voluptas atque ea labore
          voluptatibus aut?
        </p>
      </div>

      <FloatingCard className="mx-auto flex h-[450px] w-[450px] justify-center rounded-full">
        <img
          src={animals}
          alt="dernek"
          className="h-[450px] w-[450px] rounded-full "
        />
      </FloatingCard>
      <div className="flex w-[350px] flex-col bg-[#C58940] p-8 rounded-lg">
        <h1 className="text-center   font-semibold">
          Soğuk kış aylarınde desteğinize ihyacımız var!
        </h1>
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores
          numquam repellat rerum minima ipsum itaque reprehenderit? Maiores
          nihil, qui molestias vitae minus eius voluptas atque ea labore
          voluptatibus aut?
        </p>
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores
          numquam repellat rerum minima ipsum itaque reprehenderit? Maiores
          nihil, qui molestias vitae minus eius voluptas atque ea labore
          voluptatibus aut?
        </p>
      </div>
    </div>
  );
};

export default LadingPage;
