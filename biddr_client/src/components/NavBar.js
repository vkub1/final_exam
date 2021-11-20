import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav}  from 'react-bootstrap'

const NavBar = () => {
    

    return(
        <Navbar variant="light">
            <Nav className="ms-auto mx-3">
                <NavLink to='/' className="nav-item nav-link">Home</NavLink>  
                
                <NavLink to='/auctions' className="nav-item nav-link">Auctions</NavLink>
            </Nav>
        </Navbar>
    )
}

export default NavBar;