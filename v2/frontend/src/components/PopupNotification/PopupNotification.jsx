import React, { useState, useEffect } from 'react';

const messages = [
  "GDGoC WOW 2025 Coming Soon!",
  "GDGoC WOW dates will be announced soon",
  "Stay tuned for exciting updates!",
  "Join us for the biggest GDG event",
  "Registration opening soon!"
];

function PopupNotification() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className={`
          bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg
          transform transition-all duration-500 ease-in-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
      >
        {messages[currentMessage]}
      </div>
    </div>
  );
}

export default PopupNotification;
