// Notification.js
import React, { useState, useEffect } from 'react';

const Notification = ({ showNotification, onHideNotification, status }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (showNotification) {
      setIsVisible(true);

      // Set the appropriate message based on the status
      setMessage(status === 'accepted' ? 'Your request has been accepted!' : 'Your request has been received.');

      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        onHideNotification();
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showNotification, onHideNotification, status]);

  return (
    <div className={`notification ${isVisible ? 'visible' : 'hidden'}`}>
      {message}
    </div>
  );
};

export default Notification;
