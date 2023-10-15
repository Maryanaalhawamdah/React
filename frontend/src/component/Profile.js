import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the server and set it in 'userData'
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>Date of Birth: {userData.dob}</p>
          <img src={userData.image_url} alt="Profile" />
        </div>
      )}
    </div>
  );
};

export default Profile;
