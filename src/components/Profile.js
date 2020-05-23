// PROFILE SECTION IN HEADER
import React from 'react'

class Profile extends React.Component{
  render(){
    return(
      <div className="profile">
        <div className="profile-content">
          <img src="./Images/Adif.jpg" alt="author image"/>
          <h1>Ladiva Bachrulrachman</h1>
          <h2>Bachelor of Electrical Engineering</h2>
          <p><span className="fa fa-map-marker fa-lg"></span>Jakarta, Indonesia</p>
        </div>
      </div>
    );
  }
}

export default Profile;
