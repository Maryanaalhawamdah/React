import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Send login data to the server
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
