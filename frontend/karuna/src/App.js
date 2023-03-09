import './App.css';
import {Routes,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';

import Navbar from './component/Navbar/Navbar';
import Navbar1 from './component/Navbar/Navbar1';


import Login from './component/Login/Login';

import SignUp from './component/SignUp/SignUp';
import SignUpDonor  from './component/SignUp/SignUpDonor';
import SignUpReceiver from './component/SignUp/SignUpReceiver';
import SignUpStaff from './component/SignUp/SignUpStaff';


//Donor
import Dashboard from './component/Dashboard/DonorDashboard';

import DonorProfile from './component/Dashboard/DonorProfile';
import DonorUpdate from './component/Dashboard/DonorUpdate';
import DonorHistory from './component/Dashboard/DonorHistory';
import DonorCampaign from './component/Dashboard/DonorCampaign';
import DonorReceiverList from './component/Dashboard/DonorReceiverList';

import FoodDonation from './component/DonationForm/FoodDonation';
import FurnitureDonation from './component/DonationForm/FurnitureDonation';
import ClothDonation from './component/DonationForm/ClothesDonation';
import ToyDonation from './component/DonationForm/ToyDonation';


//Receiver
import ReceiverDashboard from './component/ReceiverDashboard/ReceiverDashboard';
import ReceiverPageContent from './component/ReceiverDashboard/ReceiverPageContent';
import ReceiverSideMenu from './component/ReceiverDashboard/ReceiverSideMenu';
import ReceiverProfile from './component/ReceiverDashboard/ReceiverProfile';
import ReceiverUpdate from './component/ReceiverDashboard/ReceiverUpdate';
import ReceiverHistory from './component/ReceiverDashboard/ReceiverHistory';
import ReceiverDonorList from './component/ReceiverDashboard/ReceiverDonorList';
import RequestDonation from './component/ReceiverDashboard/RequestDonation';




import FoodDonationsList from './component/DonationList/FoodDonationsList';
import FoodDetails from './component/DonationList/FoodDetails';



//Admin Staff
import AdminDashboard from './component/StaffAdmin/AdminDashboard';
import AdminPageContent from './component/StaffAdmin/AdminPageContent';
import AdminSideMenu from './component/StaffAdmin/AdminSideMenu';



function App() {
  return (
    <div className>

    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Navbar1></Navbar1>
      </div>
    </div>
    <div>
         <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signupdonor" element={<SignUpDonor/>}/>
          <Route path="/signupreceiver" element={<SignUpReceiver/>}/>
          <Route path="/signupstaff" element={<SignUpStaff/>}/>


          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>


          {/* Donor */}
          <Route path="/dashboard" element={<Dashboard/>}/>

          <Route path="/DonorProfile" element={<DonorProfile/>}/>
          <Route path="/DonorHistory" element={<DonorHistory/>}/>
          <Route path="/DonorUpdate" element={<DonorUpdate/>}/>
          <Route path="/DonorCampaign" element={<DonorCampaign/>}/>
          <Route path="/DonorReceiverList" element={<DonorReceiverList/>}/>


          <Route path="/FoodDonation" element={<FoodDonation/>}/>
          <Route path="/FurnitureDonation" element={<FurnitureDonation/>}/>
          <Route path="/ClothDonation" element={<ClothDonation/>}/>
          <Route path="/ToyDonation" element={<ToyDonation/>}/>



          {/* Receiver */}
          <Route path="/ReceiverDashboard" element={<ReceiverDashboard/>}/>
          <Route path="/ReceiverPageContent" element={<ReceiverPageContent/>}/>
          <Route path="/ReceiverSideMenu" element={<ReceiverSideMenu/>}/>
          <Route path="/ReceiverProfile" element={<ReceiverProfile/>}/>
          <Route path="/ReceiverUpdate" element={<ReceiverUpdate/>}/>
          <Route path="/ReceiverHistory" element={<ReceiverHistory/>}/>
          <Route path="/ReceiverDonorList" element={<ReceiverDonorList/>}/>
          <Route path="/RequestDonation" element={<RequestDonation/>}/>

          

          <Route path="/FoodDonationsList" element={<FoodDonationsList/>}/>
          <Route path="/FoodDetails" element={<FoodDetails/>}/>
          {/* <Route path="/FoodDetails" element={<FoodDetails/>}/> */}

          


         

          {/* Staff */}
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/AdminPageContent" element={<AdminPageContent/>}/>
          <Route path="/AdminSideMenu" element={<AdminSideMenu/>}/>

          
          

          
          

          </Routes>   
    </div>
    </div>
  );
}

export default App;
