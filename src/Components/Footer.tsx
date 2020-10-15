import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function footer() {

    return (
        <footer className="mt-5">
            <Container fluid>
                <Row className="border-top p-3 flex-column">
                    <Col className="d-flex p-0 justify-content-center font-weight-bold">Zeheng Lin</Col>
                    <Col className="d-flex p-0 justify-content-center">Personal portfolio website</Col>
                </Row>
                <Row className="justify-content-between p-10">
                    <Col className="d-flex justify-content-center">
                        links
                    </Col>
                    <Col className="d-flex justify-content-center">
                        contact info
                    </Col>
                    <Col className="d-flex justify-content-center">
                        social link
                    </Col>
                </Row>


            </Container>

        </footer>
    )

}

export default footer;
