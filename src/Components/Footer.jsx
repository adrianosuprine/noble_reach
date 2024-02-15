// import React from "react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-gray-200 py-8 bg-blue-200">
        <div className="max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-4 mx-auto">
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Abou Us</h3>
              <p>
                We serve as a bridge between donors and charitable
                organizations. We empower donors to make informed contributions
                and strengthens the impact of charitable initiatives
              </p>
            </div>
          </div>

         
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Why Donate</h3>
              
              <p>
                <ul>
                  Inspire Additional Donations Cultivate Generous Kids Feel
                  Wealthier Double your Impact
                </ul>
              </p>
            </div>
          </div>

          
          <div className="bg-blue- shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Donation</h3>
              
              <p className="flex"><img src="src/assets/visa.png"/></p>
              <p><img src="/src/assets/paypal.png"/></p>
              <p><img src="/src/assets/mpesa.png"/></p>
            </div>
          </div>

       
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Contacts</h3>
              
              <ul>
                
                Phone: +25470034776 , Tel: 020 7643533 EMAIL: noblereach@org.ke
                P.O Box: 28860-oo100, NAIROBI.
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
