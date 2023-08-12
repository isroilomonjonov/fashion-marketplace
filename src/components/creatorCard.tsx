"use client";
import { useState } from "react";

const CreatorCard = ({
  data,
}: {
  data: { name: string; image: string; bgImage: string };
}) => {
  const [followed, setFollowed] = useState(false);
  return (
    <div style={{ maxWidth: "390px" }}>
      <div>
        <img
          className="h-auto max-w-full rounded-lg object-cover"
          style={{ borderEndEndRadius: "0px", borderBottomLeftRadius: "0px" }}
          src={data.bgImage}
          alt=""
        />
      </div>
      <div
        className="card"
        style={{ borderStartStartRadius: "0px", borderStartEndRadius: "0px" }}
      >
        <img
          className=" max-w-full relative rounded-full object-cover"
          style={{ top: "-50px", left: "50%", transform: "translateX(-50%)" }}
          src={data.image}
          alt=""
        />
        <div
          className="flex items-center  flex-col relative"
          style={{ top: "-45px", left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-white">{data.name}</h3>
            <img src={"auth.svg"} alt="auth" />
          </div>
          <p
            className="text-sm text-gray-400 text-center"
            style={{ maxWidth: "307px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div
          className="flex items-center justify-center relative"
          style={{ top: "-30px", left: "50%", transform: "translateX(-50%)" }}
        >
          <button
            onClick={() => setFollowed(!followed)}
            className={`${
              followed ? "buttonF" : "button"
            } w-80 hover:opacity-80`}
          >
            {followed ? "+ Followed" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
