import React, { useState } from "react";
import Slider from "react-slick";
import PriceInfoCard from "../components/PriceInfoCard";
import cats from "../images/kedi.jpg";
import dogs from "../images/kopek.jpg";
import birds from "../images/birds.jpg";
import { RevealItems } from "../components/Animations/RevealAnimation";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { addTodo, useBlog } from "../firebase";
//import { Player, } from '@lottiefiles/react-lottie-player';

const Home = () => {
  function ArrowHidden(props) {
    const { style } = props;
    return <div style={{ ...style, display: "hidden" }} />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowHidden />,
    prevArrow: <ArrowHidden />,
  };


  return (
    <>
      <Helmet>
        <title>Socail Animals</title>
      </Helmet>
      <RevealItems delay={200}>
        <div className="flex justify-center">
          <div className="mt-20 h-[500px] w-[1000px]">
            <Slider {...settings} className="h-[520px] w-full">
              <div className="relative h-[500px] w-full">
                <img
                  src={cats}
                  alt=""
                  className="aspect-auto h-[500px] w-full"
                />
                <span className="absolute top-[150px] left-10 text-2xl font-bold text-brand-1">
                  Kediler Hakkında Soru Sor
                </span>
                <span className="absolute top-[220px] left-10 text-xl font-medium text-brand-15">
                  Soğuk kış aylarında sevimli hayvanlarımız için destek
                  bekliyoruz...
                </span>
                <button className="absolute bottom-[80px] left-10 h-[40px] w-[250px] bg-white font-bold opacity-80">
                  Daha Fazlası...
                </button>
              </div>
              <div className="relative h-[500px] w-full">
                <img
                  src={dogs}
                  alt=""
                  className="aspect-auto h-[500px] w-full"
                />
                <span className="absolute top-[150px] left-10 text-2xl font-bold text-brand-1">
                  Köpekler Hakkında Soru Sor
                </span>
                <span className="absolute top-[220px] left-10 text-xl font-medium text-brand-15">
                  Soğuk kış aylarında sevimli hayvanlarımız için destek
                  bekliyoruz...
                </span>
                <button className="absolute bottom-[80px] left-10 h-[40px] w-[250px] bg-white font-bold opacity-80">
                  Daha Fazlası...
                </button>
              </div>
              <div className="relative h-[500px] w-full">
                <img
                  src={birds}
                  alt=""
                  className="aspect-auto h-[500px] w-full"
                />
                <span className="absolute top-[150px] left-10 text-2xl font-bold text-brand-1">
                  Kuşlar Hakkında Soru Sor
                </span>
                <span className="absolute top-[220px] left-10 text-xl font-medium text-brand-15">
                  Soğuk kış aylarında sevimli hayvanlarımız için destek
                  bekliyoruz...
                </span>
                <button className="absolute bottom-[80px] left-10 h-[40px] w-[250px] bg-white font-bold opacity-80">
                  Daha Fazlası...
                </button>
              </div>
            </Slider>
          </div>
        </div>

        {
          <div className="mb-16 flex justify-center ">
            <div className="mt-[80px] grid max-w-[1400px] grid-cols-3 gap-10 gap-y-16 ">
              {new Array(3).fill().map(() => (
                <PriceInfoCard />
              ))}{" "}
            </div>
          </div>
        }
      </RevealItems>

   
    </>
  );
};

export default Home;
