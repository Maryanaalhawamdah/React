import React from 'react';

const WelcomeMessage = ({ data }) => {
  return (
    <div>
      <h2>Welcome, {data.username}!</h2>
      <p>Your password is: {data.password}</p>
    </div>
  );
};

export default WelcomeMessage;
