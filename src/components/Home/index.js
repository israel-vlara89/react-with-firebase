import React from 'react';
import { withAuthorization } from '../Session';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const HomePage = () => (

    <Container>
        <Row>
            <Col>
                <Card bg="secondary" text="white" border="primary" style={{ opacity: '0.85' }}>
                    <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card bg="secondary" text="white" border="primary" style={{ opacity: '0.85' }}>
                    <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>
);
const condition = authUser => !!authUser;


export default withAuthorization(condition)(HomePage);