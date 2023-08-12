import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 mr-10">
            <p className="font-bold text-blue-700 text-3xl hover:text-blue-500">
              Logo
            </p>
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-200">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-200">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-200">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-200">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
