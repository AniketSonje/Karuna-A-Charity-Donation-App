import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
//   MDBCheckbox,MDBRow,MDBCol,MDBFile
}
from 'mdb-react-ui-kit';
import ReceiverDashboard from './ReceiverDashboard';

const RequestDonation = () => {
  return (
    <div>
    <div className="container">
      <div>
        <ReceiverDashboard></ReceiverDashboard>
      </div>
      <div className="content">
          
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url()'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Donation Request</h2>
          <MDBInput wrapperClass='mb-4' placeholder='Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='Type' size='lg' id='form2' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='quantity' size='lg' id='form3' type='number'/>
          <MDBInput wrapperClass='mb-4' placeholder='Desciption' size='lg' id='form4' type='text'/>
         
         
          <Link to={"/receiverpagecontent"}><MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Make Request</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
      

      </div>
  </div>

      
  </div>
   
  );
}

export default RequestDonation;

