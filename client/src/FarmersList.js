// FarmersList.js
import React from 'react';
import { Link } from 'react-router-dom';

const FarmersList = () => {
  // Replace with your company data
  const companies = [
    { id: 1, name: 'Company A', image: 'companyA.jpg' },
    { id: 2, name: 'Company B', image: 'companyB.jpg' },
    // Add more companies as needed
  ];

  return (
    <div>
      <h2>Companies List</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <Link to={`/bookings/${company.id}`}>
              <img src={company.image} alt={company.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmersList;
