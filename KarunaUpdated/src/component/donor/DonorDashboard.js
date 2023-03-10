import React from "react";
import './DonorDashboard.css';
import { Link } from "react-router-dom";


const DonorDashboard = () => {

  return (
    <div id="dassh">
      <div className="menu">
              
        <ul>
        <li><h5>Donor Name</h5></li>
          <hr></hr>
          <Link to="/donorprofile"><li>Profile</li></Link>
          <Link to="/donorpagecontent"><li>Donate</li></Link>
          <Link to="/donorhistory"><li>History</li></Link>
          <Link to="/donorcampaign"><li>Campaigns</li></Link>
          <Link to="/receiverlist"><li>Receivers</li></Link>


        </ul>
      </div>
        </div>
  );
};

export default DonorDashboard;
