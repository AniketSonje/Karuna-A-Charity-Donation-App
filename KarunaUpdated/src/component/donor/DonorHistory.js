import './DonorDashboard.css';
import Table from 'react-bootstrap/Table';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
import DonorDashboard from "./DonorDashboard";
function DonorHistory (props)  {

  return (
    <div>
        <div className="container">
            <div>
                <DonorDashboard></DonorDashboard>
            </div>
            <div className="content">


                <div className="donor-profile">

                    <h3>Donation History</h3>
                    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Receiver Name</th>
          <th>Donation Type</th>
          <th>Address</th>
          <th>Phone No</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark Wood</td>
          <td>Food</td>
          <td>Pune</td>
          <td>7894561230</td>
        </tr>
        
      </tbody>
    </Table>
                </div>


            </div>
        </div>
    </div>


   
  );
};

export default DonorHistory;
