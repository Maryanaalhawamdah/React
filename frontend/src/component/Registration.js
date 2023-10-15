import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleRegistration = () => {
    // Send registration data to the server
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        onChange={handleInputChange}
      />
      <input type="file" name="image" onChange={handleImageChange} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
