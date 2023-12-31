import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AboutFocus } from '../../DataArr/AboutFocus';
import Services from '../../Pages/Home/Services/Services';

const Service = () => {
    return (
        <section className="service-wrapper bg-neutral-900  ">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title text-center">
                        <h1 style={{ fontSize: '60px' }}> Customer Focused Approach</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        AboutFocus.map(treatment => (
                            <Services key={treatment.id} treatment={treatment} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Service;