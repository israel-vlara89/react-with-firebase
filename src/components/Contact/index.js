import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';

const transparent = {
    opacity: "0.9"
}
const h1Style = {
    textAlign: "center",
    marginBottom: "30px",
    opacity: "0.9"
}
const width = {
    maxWidth: "800px"
}

const ContactPage = () => (

    <Container style={width}>
        <h1 style={h1Style}>Contact Us</h1>
        <Jumbotron style={transparent}>
            <Row>
                <Col xs={12}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" />
                        </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send Message          
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Jumbotron>
    </Container>                   
);

export default ContactPage;