import React from 'react'
import { Routes, Route } from 'react-router-dom'; 


function LandingPage() {
    return (
      <div>
         <nav>
         <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* < class "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" > */}
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">NOBLE_REACH</a>
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">HOME</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">WHY DONATE</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">CONTACT US</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">ABOUT US</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">CALENDAR EVENTS</a>
          </div>
        </div>
         </nav>

<h1 className="text-blue-700 font-bold  text-normal">
Welcome to Noble Reach
      </h1>

      <div className="flex justify-center pt-20">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg">
          <a href="https://tailwindcss.com/">
            <img
              className="rounded-t-lg w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOJKdBGCpTCfxJGAaZHhwqN5k0jD1jvHOzWE6kq84ksnVgQbpqF2G3IO7NLZrJL9lp2I&usqp=CAU"
              alt="tailwind image"
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700">
            At Noble Reach, we believe in the power of compassion to make a difference. Our mission is to create positive change by supporting those in need, fostering hope, and building a community dedicated to making the world a better place.
            </p>
            <a
              href="/" //here we can have a particular path we want our client to visit on the more
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
              More...
              {/* <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg> */}
            </a>
          </div>
        </div>
      </div>
    
  
        
        
        
      </div>
    );
  }
  
  export default LandingPage;