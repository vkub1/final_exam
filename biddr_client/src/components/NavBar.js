import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav}  from 'react-bootstrap'
import { Session } from '../requests';


const NavBar = ({currentUser, onSignOut}) => {
    const handleSignOut = () => {
        Session.destroy().then(() => onSignOut())
    }

    return(
        <Navbar variant="light">
            <NavLink to="/" class="nav-item nav-link"><NavbarBrand>Biddr</NavbarBrand></NavLink>
            <Nav className="ms-auto mx-3">
                { currentUser ? (
                    <a href="/" className="nav-item nav-link disabled text-dark">Hello {currentUser.name}!</a>
                    ):null
                }
                <NavLink to='/' className="nav-item nav-link">Home</NavLink>  
                
                <NavLink to='/auctions' className="nav-item nav-link">Auctions</NavLink>
                {
                currentUser ? (
                    <>
                    <NavLink to='/auctions/new' className="nav-item nav-link text-dark"> New Auction</NavLink>
                    <p onClick={handleSignOut} className="nav-item nav-link text-dark">Sign Out</p>
                    </>
                ): (
                    <>
                    
                    <NavLink to='sign_in' className="nav-item nav-link">Sign In</NavLink>
                    <NavLink to='sign_up' className="nav-item nav-link">Sign Up</NavLink>
                    </>
                )
            }
            </Nav>
        </Navbar>
    )
}

export default NavBar;