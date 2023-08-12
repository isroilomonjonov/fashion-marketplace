"use client";
import { useState } from "react";

const GroupButtons = () => {
  const [filter, setFilter] = useState("All Collections");
  const buttonData = [
    "All Collections",
    "Verified Brands",
    "Verified Artists",
    "New Drops",
    "Live Shows",
  ];
  return (
    <div className="flex sm:py-24 md:flex-row flex-col w-80 m-auto md:w-full md:m-0 md:items-center mt-10 mb-10 gap-5">
      {buttonData.map((b) => (
        <button
          key={b}
          onClick={() => setFilter(b)}
          className={`${
            filter === b ? "button" : "createButton"
          } hover:opacity-80`}
        >
          {b}
        </button>
      ))}
    </div>
  );
};

export default GroupButtons;
