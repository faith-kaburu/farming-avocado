// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// const CompanyDetails = ({ companies }) => {
//   const { companyId } = useParams();
//   const company = companies.find((c) => c.id === parseInt(companyId, 10));

//   if (!company) {
//     return <p>Company not found</p>;
//   }

//   return (
//     <div>
//       <h2>{company.name}</h2>
//       <p>Location: {company.location}</p>

//       <h3>Avocados for Sale:</h3>
//       <ul>
//         {company.avocados.map((avocado, index) => (
//           <li key={index}>
//             Type: {avocado.type}, Price Range: {avocado.priceRange}
//           </li>
//         ))}
//       </ul>

//       <p>Contact Number: {company.contactNumber}</p>

//       <Link to={`/booking-form/${company.id}`}>Proceed to Booking Form</Link>
//     </div>
//   );
// };

// export default CompanyDetails;
