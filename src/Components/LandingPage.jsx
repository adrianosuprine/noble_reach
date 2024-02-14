import React from 'react'



function LandingPage() {
    return (
      <div>
         <nav>
         <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
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
        <h1>Welcome to Noble Reach</h1>
        <p className='noble'>At Noble Reach, we believe in the power of compassion to make a difference. Our mission is to create positive change by supporting those in need, fostering hope, and building a community dedicated to making the world a better place.</p>
        
      </div>
    );
  }
  
  export default LandingPage;