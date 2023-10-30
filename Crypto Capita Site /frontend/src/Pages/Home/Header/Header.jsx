import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../Images/logo.png';
import logoo from '../../../Images/cc logo.png'
// import Logoreg from '../../../../public'; 
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div className="sticky top-0  bg-gray-300 z-50">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className=" py-1 flex items-end align-end justify-end">
                <Navbar.Brand className='flex items-center' href="/home">
                        <img src={logoo} alt="Logo-reg" style={{ height: '100px' }} />
                        <h1 className='text-4xl mt-3 font-bold'>Crypto Capita</h1>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/claim" className='list-item text-decoration-none'>Claim</Link>
                            <Link to="/voting" className='list-item text-decoration-none'>Status</Link>
                    
                            {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">connect wallet</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    
    );
};

export default Header;
