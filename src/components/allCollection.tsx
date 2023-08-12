import React from "react";
import Benefit from "./benefit";
import GroupButtons from "./groupButtons";

const AllCollection = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center flex-col justify-center">
        <h2 className="title-font text-3xl mb-2 font-bold text-white sm:text-5xl sm:mb-4">
        All Collection
        </h2>
        <p
          className="text-gray-400 text-xl text-center"
        >
         Worlds First Layer 2 Fashion Marketplace
        </p>
      </div>
      <Benefit/>
      <GroupButtons/>
    </div>
  );
};

export default AllCollection;
