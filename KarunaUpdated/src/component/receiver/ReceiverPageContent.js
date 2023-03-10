// import './PageContent.css';
import { Link } from 'react-router-dom';
import React from "react";
import ReceiverDashboard from './ReceiverDashboard';

// import fooddonate from '../../assets/fooddonate.jpg';
// import furnituredonate from '../../assets/furnituredonate.jpg';
// import clothesdonate from '../../assets/clothesdonate.jpg';
// import toysdonate from '../../assets/toysdonate.jpeg';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReceiverPageContent = () => {

  return (
    <>
    <div>
      <div className="container">
        <div>
          <ReceiverDashboard></ReceiverDashboard>
        </div>
        <div className="content">

        <div className='pagecontent'>
        <div className='cards'>
        <br></br><br></br>
        <div>  
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt="fooddonate" />
            <Card.Body>
                <Card.Title>Food Donations</Card.Title>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Link to={"/FoodDonationsList"}><Button variant="primary">View </Button></Link>
            </Card.Body>
            </Card>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt="clothesdonate" />
            <Card.Body>
                <Card.Title>Clothing Donations</Card.Title>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Link to={"/ClothDonation"}><Button variant="primary">View </Button></Link>
            </Card.Body>
            </Card>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt="furnituredonate" />
            <Card.Body>
                <Card.Title>Furniture Donations</Card.Title>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Link to={"/FurnitureDonation"}><Button variant="primary">View </Button></Link>
            </Card.Body>
            </Card>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>  
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt="toysdonate" />
            <Card.Body>
                <Card.Title>Toys Donations</Card.Title>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Link to={"/ToyDonation"}><Button variant="primary">View </Button></Link>
            </Card.Body>
            </Card>
        </div>


        </div>
    </div>
           
            
        </div>
    </div>

        
    </div>

    
    </>
  );
};

export default ReceiverPageContent;


