import React from 'react';

const Partners = () => {
  const partners = [
    { id: 1, name: "Safaricom Foundation", logo: "https://www.safaricom.co.ke/images/SAFARICOM-FOUNDATION.jpg", website: "https://www.safaricomfoundation.org/" },
    { id: 2, name: "Mastercard Foundation", logo: "https://vectorlogoseek.com/wp-content/uploads/2018/12/mastercard-foundation-vector-logo.png", website: "https://mastercardfdn.org" },
    { id: 3, name: "Equity Group", logo: "http://107.170.76.22/wp-content/uploads/2016/06/Equity-Master-Logo-01-1-1-1100x778.jpg", website: "https://equitygroupfoundation.com/" },
    { id: 4, name: "United Nations", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Flag-United-Nations-Logo.jpg/800px-Flag-United-Nations-Logo.jpg", website: "https://www.un.org/en/" },
    { id: 5, name: "USAID", logo: "https://seeklogo.com/images/U/USAID-logo-D98B06D211-seeklogo.com.png", website: "https://www.usaid.gov/" },
    { id: 7, name: "Kenya Red Cross", logo: "https://www.redcross.or.ke/wp-content/uploads/2023/03/logo-203x114-1.png", website: "https://www.redcross.or.ke/" },
    { id: 9, name: "Agha Khan Foundation", logo: "https://static.the.akdn/53832/1652455323-akf.png?h=158&w=428&auto=format", website: "https://www.akfusa.org/" },
  ];

  return (
    <div className="partners-container">
      <h2>Noble Reach Partners & Sponsors</h2>
      <div className="partners-list">
        {partners.map(partner => (
          <div key={partner.id} className="partner-card">
            <a href={partner.website} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={partner.name} />
            </a>
            <div className="partner-details">
              <h3>{partner.name}</h3>
              <p>Visit their website: <a href={partner.website} target="_blank" rel="noopener noreferrer">{partner.website}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
