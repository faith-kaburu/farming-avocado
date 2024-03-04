import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Notification from './Notification';
import styled, { keyframes } from 'styled-components';
import backgroundImage from './Assets/image2.jpg'; // Import your background image here

const moveBackground = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 100vh; /* Ensure the background covers the entire viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${moveBackground} 20s linear infinite; /* Apply the animation to the background image */
`;

const FormContainer = styled.div`
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9); /* Add a semi-transparent white background to improve readability */
`; 

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const SubmitButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
`;

const NotificationContainer = styled.div`
  margin-top: 10px; /* Adjust margin as needed */
`;

// Add a new styled component for the select element
const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const BookingForm = () => {
  const { companyId } = useParams();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState('');
  const [countryCode, setCountryCode] = useState('+254'); // Default to Kenya's country code

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneNumber = countryCode + document.getElementById('phoneNumber').value;
    // Rest of your handleSubmit logic

    // Show notification after booking
    setShowNotification(true);
    setNotificationStatus('Success! Your booking has been submitted.');
  };

  const handleHideNotification = () => {
    setShowNotification(false);
  };

  return (
    <Container>
      <FormContainer>
        <h2>Booking Form for Company {companyId}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput type="text" id="name" name="name" required />
          </div>
          <div>
            <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
            <div style={{ display: 'flex' }}>
              <FormSelect value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                <option value="+254">Kenya (+254)</option>
                <option value="+1">United States (+1)</option>
                <option value="+213">Algeria (+213)</option>
                <option value="+244">Angola (+244)</option>
                <option value="+267">Botswana (+267)</option>
                <option value="+226">Burkina Faso (+226)</option>
                <option value="+257">Burundi (+257)</option>
                <option value="+237">Cameroon (+237)</option>
                <option value="+238">Cape Verde (+238)</option>
                <option value="+236">Central African Republic (+236)</option>
                <option value="+235">Chad (+235)</option>
                <option value="+269">Comoros (+269)</option>
                <option value="+243">Congo, Democratic Republic of the (+243)</option>
                <option value="+242">Congo, Republic of the (+242)</option>
                <option value="+253">Djibouti (+253)</option>
                <option value="+20">Egypt (+20)</option>
                <option value="+240">Equatorial Guinea (+240)</option>
                <option value="+291">Eritrea (+291)</option>
                <option value="+251">Ethiopia (+251)</option>
                <option value="+241">Gabon (+241)</option>
                <option value="+220">Gambia (+220)</option>
                <option value="+233">Ghana (+233)</option>
                <option value="+224">Guinea (+224)</option>
                <option value="+245">Guinea-Bissau (+245)</option>
                <option value="+254">Kenya (+254)</option>
                <option value="+231">Liberia (+231)</option>
                <option value="+218">Libya (+218)</option>
                <option value="+261">Madagascar (+261)</option>
                <option value="+265">Malawi (+265)</option>
                <option value="+223">Mali (+223)</option>
                <option value="+230">Mauritius (+230)</option>
                <option value="+262">Mayotte (+262)</option>
                <option value="+212">Morocco (+212)</option>
                <option value="+258">Mozambique (+258)</option>
                <option value="+264">Namibia (+264)</option>
                <option value="+227">Niger (+227)</option>
                <option value="+234">Nigeria (+234)</option>
                <option value="+262">Réunion (+262)</option>
                <option value="+250">Rwanda (+250)</option>
                <option value="+290">Saint Helena (+290)</option>
                <option value="+239">São Tomé and Príncipe (+239)</option>
                <option value="+221">Senegal (+221)</option>
                <option value="+248">Seychelles (+248)</option>
                <option value="+232">Sierra Leone (+232)</option>
                <option value="+252">Somalia (+252)</option>
                <option value="+27">South Africa (+27)</option>
                <option value="+211">South Sudan (+211)</option>
                <option value="+249">Sudan (+249)</option>
                <option value="+268">Swaziland (+268)</option>
                <option value="+255">Tanzania (+255)</option>
                <option value="+228">Togo (+228)</option>
                <option value="+216">Tunisia (+216)</option>
                <option value="+256">Uganda (+256)</option>
                <option value="+260">Zambia (+260)</option>
                <option value="+263">Zimbabwe (+263)</option>
              </FormSelect>
              <FormInput type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{9}" required />
            </div>
          </div>
          <div>
            <FormLabel htmlFor="quantity">Quantity of Avocados:</FormLabel>
            <FormInput type="number" id="quantity" name="quantity" min="0" required />
          </div>
          <div>
            <FormLabel htmlFor="price">Price (according to the price range of the company):</FormLabel>
            <FormInput type="number" id="price" name="price" min="0" required />
          </div>
          <div>
            <FormLabel htmlFor="avocadoType">Type of Avocados:</FormLabel>
            <FormSelect id="avocadoType" name="avocadoType" required>
              <option value="">Select Type</option>
              <option value="Hass">Hass</option>
              <option value="Fuerte">Fuerte</option>
              <option value="Pinkerton">Pinkerton</option>
              {/* Add more options as needed */}
            </FormSelect>
          </div>
          <div>
            <FormLabel htmlFor="pickupDates">Available Dates for Pickup:</FormLabel>
            <FormInput type="date" id="pickupDates" name="pickupDates" required />
          </div>

          <SubmitButton type="submit">Book</SubmitButton>
        </form>

        {/* Display the Notification component with the appropriate status */}
        <NotificationContainer>
          <Notification
            showNotification={showNotification}
            onHideNotification={handleHideNotification}
            status={notificationStatus}
          />
        </NotificationContainer>
      </FormContainer>
    </Container>
  );
};

export default BookingForm;
