import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React from 'react';
import DonorDashboard from "./DonorDashboard";
const ReceiverList = () => {

  return (
    <div>
        <div className="container">
            <div>
                <DonorDashboard></DonorDashboard>
            </div>
            <div className="content">

            <h3>Receivers List</h3>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Phone No</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Pune</td>
          <td>7894561230</td>
          <td><Link to={"/donorpagecontent"}><Button variant="outline-success">Donate </Button></Link></td>
        </tr>
        
      </tbody>
    </Table>


            </div>
        </div>
    </div>


   
  );
};

export default ReceiverList;
