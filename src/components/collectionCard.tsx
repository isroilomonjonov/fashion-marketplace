"use client";
import { useState } from "react";
import { HeartIcon as HeartIconOut } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { LikeDataType } from "@/interfaces";
const CollectionCard = ({data}:{data:LikeDataType}) => {
  const [isLike, setIsLike] = useState(data.isLiked);
  return (
    <div className="w-100 p-4 m-auto">
      <div className="bg-gray-100 p-6 rounded-lg card">
        <img
          className="h-80 rounded w-80 object-center mb-6"
          src={data.image}
          alt="content"
        />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-base text-gray-400">@Johny</p>
            <h3 className="text-sm text-white">Lorem Inspum</h3>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">Current bid</p>
            <h3 className="text-base text-white">{data.price} ETH</h3>
          </div>
        </div>
        <div className="flex gap-3 pt-5">
          <button
            style={{ width: "47px", height: "44px" }}
            onClick={() => setIsLike(!isLike)}
          >
            {isLike ? (
              <HeartIcon style={{ fill: "red" }} />
            ) : (
              <HeartIconOut
                style={{ stroke: "red",opacity:'.5' }}
              />
            )}
          </button>
          <button className="button w-full hover:opacity-80">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
