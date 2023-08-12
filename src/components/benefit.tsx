import React from "react";

const Benefit = () => {
  return (
    <div className="flex sm:py-24 md:flex-row flex-col items-center justify-around gap-20 md:gap-0">
      <div className="flex flex-col items-center justify-center gap-2 " style={{width:'213px'}}>
        <img
          className="object-cover hover:opacity-80"
          src="fees.png"
          width={'95px'}
          alt=""
        />
        <p>No Gas Fees</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <img
          className="object-cover hover:opacity-80"
          src="nft.png"
          width={'95px'}
          alt=""
        />
        <p>Carbon Netural NFTs</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <img
          className="object-cover hover:opacity-80"
          src="transaction.png"
          width={'95px'}
          alt=""
        />
        <p>Fast And Easy Transactions</p>
      </div>
    </div>
  );
};

export default Benefit;
