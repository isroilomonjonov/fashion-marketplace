import React from "react";

const Sponsors = () => {
  return (
    <div className="flex sm:py-24 md:flex-row flex-col items-center justify-around gap-20 md:gap-0">
        <div>
            <img
        className="w-full object-cover hover:opacity-80"
        src="adidas.png"
        alt=""
      />
        </div>
      <div>
         <img
        className="w-full  object-cover hover:opacity-80"
        src="puma.png"
        alt=""
      />
      </div>
      <div>
         <img
        className=" object-cover hover:opacity-80"
        src="lacoste.png"
        alt=""
      />
      </div>
      
    </div>
  );
};

export default Sponsors;
