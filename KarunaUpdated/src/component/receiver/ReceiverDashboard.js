import React from "react";
import { Link } from "react-router-dom";


const ReceiverDashboard = () => {

  return (
    <div>
      <div className="menu">
              
        <ul>
        <li><h5>Receiver Name</h5></li>
          <hr></hr>
          <Link to={"/receiverprofile"}><li>Profile</li></Link>
          <Link to={"/receiverpagecontent"}><li>Donations</li></Link>
          <Link to={"/receiverhistory"}><li>History</li></Link>
          <Link to={"/requestdonation"}><li>Request</li></Link>

        </ul>
      </div>
        </div>
  );
};

export default ReceiverDashboard;
