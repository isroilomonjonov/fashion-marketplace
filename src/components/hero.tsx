import React from "react";
import Statistics from "./statistics";
import HeroGallery from "./heroGallery";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-24">
      <div className="container mx-auto flex py-14 sm:py-24 lg:flex-row flex-col items-center justify-center">
        <div className=" lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-4xl mb-2 font-extrabold text-white sm:text-6xl sm:mb-4">
          Clothes are the
            <br className="hidden lg:inline-block" />
            Spirit of Fashion
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-gray-400 sm:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
          </p>
          <div className="flex justify-center gap-3">
            <button className="button hover:opacity-80">
            Explore Now
            </button>
            <button className="createButton hover:opacity-80">
              Create
            </button>
          </div>
          <Statistics/>
        </div>
        <div className="lg:max-w-lg lg:w-full w-full" style={{}}>
          <HeroGallery/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
