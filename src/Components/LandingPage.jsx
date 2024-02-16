// import React from "react";
// import { Routes, Route } from "react-router-dom";


import Cards from "./Cards";
import Gallery from "./Gallery";

function LandingPage() {
  return (
    <div>
     
      <div>
        <h1 className="text-blue-700 font-bold  text-normal">
          Welcome to Noble Reach
        </h1>
      </div>
      <section className="flex">
        <div className="max-w-medium bg-white border border-black-200 rounded-lg flex">
          <div className="p-5 w-1/2">
            {" "}
            <p className="mb-3 font-normal text-black-700">
              At Noble Reach, we believe in the power of compassion to make a
              difference. Our mission is to create positive change by supporting
              those in need, fostering hope, and building a community dedicated
              to making the world a better place.
            </p>
          </div>
          <img
            className="rounded-t-lg w-1/2"
            src="/src/assets/dispicon.jpeg"
            alt="charity image"
          />
        </div>
      </section>
      <section>
        <div className="justify-center pdl-45">
          <a
            href="/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            More...
          </a>
        </div>
      </section>
      <Cards />
      <Gallery />
      
    </div>
  );
}

export default LandingPage;
