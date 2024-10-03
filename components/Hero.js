"use client";

import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import ButtonInternal from '../components/ButtonInternal';
import HeroImg from "../public/home/hero-min.jpg"

const Hero = ({ variant = "white" }) => {
  const bgColor = variant === "grey" ? "bg-gray-100" : "bg-white";

  return (
    <section className={`max-w-7xl mx-auto ${bgColor} flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20`}>
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Travel with your baby <i>stress-free</i>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Get a custom, personalised packing list for your baby&apos;s first trip in seconds:
        </p>
        <ButtonInternal 
          text="Create Baby Travel Bundle" 
          className="btn btn-primary btn-wide"
          targetPage="/bundle" 
        />

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src={HeroImg}
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;