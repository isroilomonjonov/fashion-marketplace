import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center mt-10">
        <h2 className="title-font text-3xl mb-2 font-bold text-white sm:text-5xl sm:mb-4">
          About Us
        </h2>
        <p
          className="text-gray-400 text-xl text-center"
          style={{ width: "423px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover rounded"
              alt="hero"
              src="aboutUsImage.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-3xl mb-2 font-bold text-white sm:text-5xl sm:mb-4">
              Fashion That Speaks
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar.{" "}
            </p>
            <button className="button hover:opacity-80">Show more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
