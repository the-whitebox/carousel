import React, { useState } from "react";
import { useFeatureContext } from "../context/FeatureContext";
import Image from "next/image";
import Skelton from "./Skelton";

const CarouselComp: React.FC = () => {
  const { state } = useFeatureContext();
  const { features, loading, error } = state;
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsToShow = 4;
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShowResponsive = screenWidth < 768 ? 1 : cardsToShow;

  if (loading)
    return (
      <div className="w-full flex flex-col justify-center px-8">
        <div className="animate-pulse h-5 bg-gray-300 rounded-full dark:bg-gray-700 w-[200px] mb-5"></div>
        <div className="w-full md:flex hidden justify-center gap-4 ">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Skelton key={index} />
            ))}
        </div>
        <div className="w-full md:hidden flex justify-center gap-4">
          <Skelton />
        </div>
      </div>
    );
  if (error) return <div>Failed to load features: {error}</div>;

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, features.length - cardsToShowResponsive)
    );
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <h1 className="mb-5 text-[30px] font-bold text-black leading-6">
        Newly Added
      </h1>
      <div className="w-full flex gap-2 items-center justify-center py-4">
        <button
          onClick={handlePrev}
          className="border-[2px] border-blue-600 text-blue-600 w-[30px] h-[30px] flex justify-center items-center rounded-full"
        >
          &#10094;
        </button>
        <div className="w-full overflow-hidden px-2">
          <div
            className={`grid gap-4 ${
              screenWidth < 768 ? "grid-cols-1" : "grid-cols-4"
            }`}
          >
            {features
              .slice(currentSlide, currentSlide + cardsToShowResponsive)
              .map((item, index) => (
                <Card key={index} item={item} />
              ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="border-[2px] border-blue-600 text-blue-600 w-[30px] h-[30px] flex justify-center items-center rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

interface CardProps {
  item: any;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-gray-100 border rounded-lg shadow-sm p-4 flex-shrink-0">
      <div className="p-4 flex items-center justify-center">
        <img
          src={item.img}
          alt=""
          className="object-contain mix-blend-multiply w-full h-[300px]"
        />
      </div>
      <div className="relative mt-4">
        <div className="flex gap-2">
          <div className="p-2 rounded-full bg-white shadow-md">
            <Image
              src={item.icon}
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="mt-1">
            <p className="text-[20px] font-bold text-black leading-3">
              {item.name}
            </p>
            <p className="mt-1 text-[10px] font-normal text-gray-500 leading-2">
              {item.description}
            </p>
          </div>
        </div>
        <span className="text-[8px] px-2 py-[1px] rounded-[5px] bg-blue-500 absolute top-0 right-0 text-white">
          25% off
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {item.social.map((data: any, index: any) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-full px-2 py-[5px] flex items-center gap-1"
          >
            <div className="p-1 rounded-full bg-white shadow-md">
              <Image
                src={data.icon}
                alt=""
                width={15}
                height={15}
                style={{
                  background: data.color,
                }}
                className={`object-contain`}
              />
            </div>
            <p className="text-[12px] font-bold text-black leading-3">
              {data.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComp;
