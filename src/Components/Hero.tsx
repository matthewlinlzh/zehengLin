import React from 'react';
import {Col, Container, Jumbotron, Row} from "react-bootstrap";

interface heroProps {
    title?: string;
    subtitle?: string;
    paragraph?: string;
}

function Hero(props: heroProps) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0" >
            <Container fluid>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h2 className="display-3 font-weight-bolder text-left">{props.title}</h2>}
                        { props.subtitle && <h2 className="display-4 font-weight-light text-left">{props.subtitle}</h2>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;
