import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  // MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
//   MDBRow,MDBCol,MDBFile
}
from 'mdb-react-ui-kit';
import DonorDashboard from './DonorDashboard';
const DonorPageContent = () => {
  return (
    <div>
    <div className="container">
      <div>
        <DonorDashboard></DonorDashboard>
      </div>

      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url()'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Donation</h2>
          <MDBInput wrapperClass='mb-4' placeholder='Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='Type' size='lg' id='form2' type='text'/>
          <MDBInput wrapperClass='mb-4' placeholder='quantity' size='lg' id='form3' type='number'/>
          <MDBInput wrapperClass='mb-4' placeholder='Desciption' size='lg' id='form4' type='text'/>
          {/* <MDBRow className='align-items-center pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <div className="mb-0">Upload Photo</div>
                </MDBCol>

                <MDBCol md='9' className='pe-6 '>
                  <MDBFile size='lg' id='customFile' />
                  <div className="small text-muted mt-2"></div>
                </MDBCol>

              </MDBRow> */}
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Safe to use' />
          </div>
          <Link to={"/donorpagecontent"}><Button className='mb-4 w-100 gradient-custom-4' size='lg' variant="outline-info">Donate </Button></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>

      </div>
  </div>


   
  );
}

export default DonorPageContent;

