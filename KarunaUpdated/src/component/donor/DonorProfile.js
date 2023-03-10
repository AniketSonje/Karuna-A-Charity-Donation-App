
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import DonorDashboard from "./DonorDashboard";
import './DonorProfile.css';
const DonorProfile = () => {
  return (
    <div>
      <div className="container">
        <div>
          <DonorDashboard></DonorDashboard>
        </div>
        <div className="content">

            
            <div className="profile-container">
                <div className="profile-details">
                    <h2>John Doe</h2>
                    <p>Phone No. : 9822123420</p>
                    <p>Address: Ravet</p>
                    <p>Email : john@gmail.com</p>
                    <Link to={"/donorupdate"}><Button variant="outline-danger">Update </Button></Link>
                    <Link to={"/login"}><Button variant="outline-danger">Delete Account </Button></Link>
                </div>
            </div>

            
        </div>
    </div>

        
    </div>


   
  );
};

export default DonorProfile;
