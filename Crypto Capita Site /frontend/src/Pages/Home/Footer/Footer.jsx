import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'
import logoreg from '../../../Images/Logo-reg.png'; 
import logo from '../../../Images/logo.jpg'

const Footer = () => {
    return (
      <div className="bg-slate-800">
        <Container>
          <Row className="text-white">
            <Col xs={6} md={3}>
              <div className="single-footer-widget">
                <div className="widget-title">
                  <h2>Services</h2>
                </div>
                <div className="widget-content">
                  <NavLink className="footer-link">Claim Insurance</NavLink>
                  <NavLink className="footer-link">Apply For Insurance</NavLink>
                  <NavLink className="footer-link">About Us</NavLink>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="single-footer-widget">
                <div className="widget-title">
                  <h2>Our Address</h2>
                </div>
                <div className="widget-content">
                  <NavLink className="footer-link">Lorem ipsum dolor sit amet consectetur adipisicing elit.</NavLink>
                  <NavLink className="footer-link">Lorem ipsum dolor sit amet consectetur.</NavLink>
                  <NavLink className="footer-link">Lorem ipsum dolor sit amet.</NavLink>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="single-footer-widget flex justify-center">
                <div className="widget-content rounded-lg p-3 w-50 h-32" >
                  <img src={logo} alt="Logo" class='rounded-lg'/>
                </div>
                 <h1 className='text-4xl mt-3  font-bold'>Crypto Capita</h1>
              </div>
            </Col>
            <Col xs={12} md={3}></Col>
          </Row>
        </Container>
        <div className="bg-slate-900 py-12 text-center text-white">
          <p className='mb-0'>&copy; 2023 - <span className="developer">CryptoCapita</span> | All Rights Reserved 2023</p>
        </div>
      </div>
    );
  };
export default Footer;