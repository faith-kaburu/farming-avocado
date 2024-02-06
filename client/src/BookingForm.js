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

const BookingForm = () => {
  const { companyId } = useParams();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate server response delay (adjust as needed)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate server response (replace with your actual logic)
      const serverResponse = {
        success: true, // Set to false to simulate a failure
      };

      // Check the server response and set the appropriate status
      const status = serverResponse.success ? 'accepted' : 'received';

      // Set the notification status and show the notification
      setNotificationStatus(status);
      setShowNotification(true);

      // You may want to reset the form data or redirect to another page after submission.
    } catch (error) {
      console.error('Error submitting request:', error);
      // Handle errors, e.g., display an error message
    }
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
            <FormInput type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required />
          </div>
          <div>
            <FormLabel htmlFor="quantity">Quantity of Avocados:</FormLabel>
            <FormInput type="number" id="quantity" name="quantity" required />
          </div>
          <div>
            <FormLabel htmlFor="price">Price (according to the price range of the company):</FormLabel>
            <FormInput type="number" id="price" name="price" required />
          </div>
          <div>
            <FormLabel htmlFor="avocadoType">Type of Avocados:</FormLabel>
            <FormInput type="text" id="avocadoType" name="avocadoType" required />
          </div>
          <div>
            <FormLabel htmlFor="pickupDates">Available Dates for Pickup:</FormLabel>
            <FormInput type="text" id="pickupDates" name="pickupDates" required />
          </div>

          <SubmitButton type="submit">Book</SubmitButton>

          {/* Display the Notification component with the appropriate status */}
          <NotificationContainer>
            <Notification
              showNotification={showNotification}
              onHideNotification={handleHideNotification}
              status={notificationStatus}
            />
          </NotificationContainer>
        </form>
      </FormContainer>
    </Container>
  );
};

export default BookingForm;
