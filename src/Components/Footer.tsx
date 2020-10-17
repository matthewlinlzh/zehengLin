import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function footer() {

    return (
        <footer className="mt-5">
            <Container fluid>

                <Row className="flex-column border-top p-3 justify-content-center">
                    <Col className="font-weight-bold text-center">Zeheng Lin</Col>
                    <Col className="text-center">Personal portfolio website</Col>
                </Row>

                <Row className="justify-content-center ml-auto">

                    <Col className="flex-column text-center">
                        <p className=" font-weight-bold">links</p>
                        <Link className="nav-link p-0 " to="/about">About us</Link>
                        <Link className="nav-link p-0 " to="/portfolio">Portfolio</Link>
                        <Link className="nav-link p-0" to="/contact">Contact me</Link>
                    </Col>

                    <Col className="text-center flex-column">
                        <p className="font-weight-bold">social link</p>
                        <a className="nav-link p-0" href="https://www.linkedin.com/in/zeheng-lin-23114b149/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
                        <a className="nav-link p-0" href="https://github.com/matthewlinlzh" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Col>

                    <Col className="text-center">
                        <p className="font-weight-bold">contact info</p>
                        <p className="text-center m-0">Tel: 6479731018</p>
                        <p className="text-center">Email: zeheng.lin@outlook.com</p>
                    </Col>

                </Row>

                <Row className="border-top text-left mt-3 px-0">
                    <Col>Copyright @2020 Zeheng Lin</Col>
                </Row>

            </Container>

        </footer>
    )

}

export default footer;
