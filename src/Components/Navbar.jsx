import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-0">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              <i>NOBLE⌒REACH</i>
            </a>
          </div>
          <div className="block md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-white hover:border-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v1a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 5.5v-1zM3.5 8A1.5 1.5 0 0 1 2 6.5v-1A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v1a1.5 1.5 0 0 1-1.5 1.5H3.5zm-1 5a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 18 12.5v1a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 13.5v-1zm1 4a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 18 14.5v1a1.5 1.5 0 0 1-1.5 1.5H3.5z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`hidden md:flex md:items-center ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:space-x-4">
              <a
                href="#"
                className="text-gray-800 py-2 px-4 block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                HOME
              </a>
              <a
                href="programs"
                className="text-gray-800 py-2 px-4 block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                WHY DONATE
              </a>
              <a
                href="#"
                className="text-gray-800 py-2 px-4 block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                VOLUNTEER
              </a>
              <a
                href="donate"
                className="text-gray-800 py-2 px-4 block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                <button>Donate ❤</button>
              </a>
             
              <a
                href="events"
                className="text-gray-800 py-2 px-4 block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              >
                CALENDAR EVENTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
