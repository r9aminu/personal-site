import React from 'react';
import profileImage from './images/my-photo.jpg';

function Profile() {
  return (
    <div>
      <img src={profileImage} alt="Profile" className="profile-photo" />
      <p className="profile-text">Hello, my name is Aminu.</p>
    </div>
  );
}

export default Profile;
