import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../../assets/logo.png';


// BEM -> Block Element Modifier (karuna__navbar-links)


const Navbar = () => {
    
    return (
        <div className="karuna__navbar" id="xxx">  
            <div className="karuna__navbar-links">
                <div className="karuna__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/home"}>Home</Link></p>
                    <p><Link to={"/about"}>About Us</Link></p>
                    <p><Link to={"/contact"}>Contact Us</Link></p>

                </div>
                
            </div>
                <div className="karuna__navbar-sign">

                    <NavDropdown title="LogIn">
                                    <NavDropdown.Item as={Link} to="/login">
                                        <div className="dropdown">Donor</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/login">
                                    <div className="dropdown">Receiver</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/login">
                                    <div className="dropdown">Staff</div>
                                    </NavDropdown.Item>
                    </NavDropdown>


                    <NavDropdown title="SignUp">
                                    <NavDropdown.Item as={Link} to="/signupdonor">
                                        <div className="dropdown">Donor</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/signupreceiver">
                                    <div className="dropdown">Receiver</div>
                                    </NavDropdown.Item>
                    </NavDropdown>
                               

                </div>

        </div>

    )
}
// }
export default Navbar;



