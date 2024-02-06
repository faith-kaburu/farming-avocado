import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './BookingsPage.css';

const companies = [
  {
    id: 1,
    name: 'Kakuzi Limited',
    location: 'Muranga County',
    avocados: [
      { type: 'Hass', priceRange: '30-45' },
      { type: 'Fuerte', priceRange: '40-50' },
    ],
    contactNumber: '123-456-7890',
    image: 'https://i.pinimg.com/564x/21/c8/b0/21c8b0746680f1159f8ff8e5339b78c0.jpg', // Actual image URL
  },
  {
    id: 2,
    name: 'Avocado Farmers Co-op',
    location: 'Nairobi',
    avocados: [
      { type: 'Hass', priceRange: '35-50' },
      { type: 'Pinkerton', priceRange: '45-55' },
    ],
    contactNumber: '234-567-8901',
    image: 'https://i.pinimg.com/564x/fb/32/0d/fb320d933c137ba3f8c9ba9c14f997a6.jpg', // Actual image URL
  },
  {
    id: 3,
    name: 'Green Harvest Avocado Farm',
    location: 'Kiambu County',
    avocados: [
      { type: 'Hass', priceRange: '40-55' },
      { type: 'Gwen', priceRange: '50-60' },
    ],
    contactNumber: '345-678-9012',
    image: 'https://i.pinimg.com/564x/cf/a6/e0/cfa6e0e9c50570ca6a4edcf33b7736a7.jpg', // Actual image URL
  },
  {
    id: 4,
    name: 'Fresh Greens Agriculture',
    location: 'Rift Valley',
    avocados: [
      { type: 'Hass', priceRange: '35-50' },
      { type: 'Reed', priceRange: '45-55' },
    ],
    contactNumber: '456-789-0123',
    image: 'https://i.pinimg.com/564x/21/bf/48/21bf48556d0acd1ab9174e6e9119193d.jpg', // Actual image URL
  },
  {
    id: 5,
    name: "Nature's Bounty Farm",
    location: 'Kisumu County',
    avocados: [
      { type: 'Hass', priceRange: '40-55' },
      { type: 'Bacon', priceRange: '50-60' },
    ],
    contactNumber: '567-890-1234',
    image: 'https://i.pinimg.com/564x/7e/00/ac/7e00ac3af76ee9f8875bc7e18daae29b.jpg', // Actual image URL
  },
  {
    id: 6,
    name: 'Farm Fresh Avocados',
    location: 'Mombasa',
    avocados: [
      { type: 'Hass', priceRange: '35-50' },
      { type: 'Zutano', priceRange: '45-55' },
    ],
    contactNumber: '678-901-2345',
    image: 'https://i.pinimg.com/736x/82/09/79/820979b3925b2fa7c058b9748f8ef4d3.jpg', // Actual image URL
  },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  margin: 20px;
  background-color: green;
  animation: ${fadeIn} 0.5s ease;
`;

const CompanyItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CompanyImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const CompanyDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 10px 10px;
  margin-top: 10px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0s linear 0.3s;
  
  ${CompanyItem}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease, visibility 0s linear;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const BookingsPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    setSelectedCompany(companies[0]); // Select the first company by default
  }, []);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <Container>
      {companies.map((company) => (
        <CompanyItem key={company.id} onClick={() => handleCompanyClick(company)}>
          <CompanyImage
            src={company.image} // Use the actual image URL from the company object
            alt={company.name}
          />
          <p>{company.name}</p>
          {selectedCompany && selectedCompany.id === company.id && (
            <CompanyDetails>
              <h2>{selectedCompany.name}</h2>
              <p>Location: {selectedCompany.location}</p>

              <h3>Avocados for Sale:</h3>
              <ul>
                {selectedCompany.avocados.map((avocado, index) => (
                  <li key={index}>
                    Type: {avocado.type}, Price Range: {avocado.priceRange}
                  </li>
                ))}
              </ul>

              <p>Contact Number: {selectedCompany.contactNumber}</p>

              <Link to={`/booking-form/${selectedCompany.id}`}>Proceed to Booking Form</Link>
            </CompanyDetails>
          )}
        </CompanyItem>
      ))}
    </Container>
  );
};

export default BookingsPage;
