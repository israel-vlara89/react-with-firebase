import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const opacity = {
    opacity: "0.9"
};
const textAlignment = {
    textAlign: "center",
    marginBottom: "50px"
}

const PasswordForgetPage = () => (
    <div>
        <h1 style={textAlignment}>Password Forget</h1>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        
        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
        .doPasswordReset(email)
        .then(() => {
            this.setState({ ...INITIAL_STATE });
        })
        .catch(error => {
            this.setState({ error });
        });
    event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const { email, error } = this.state;

        const isInvalid = email === '';

        return(
                <Row className="justify-content-md-center">
                    <Jumbotron style={opacity}>
                        <Col md="auto">
                            <Form onSubmit={this.onSubmit}autocomplete="off" >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" value={this.state.email} onChange={this.onChange} type="text" placeholder="Email Address" />
                                </Form.Group>
                                <Button  disabled={isInvalid} variant="primary" type="submit">
                                    Reset My Password
                                </Button>
                                {error && <p>{error.message}</p>}
                            </Form>
                        </Col>
                    </Jumbotron>
                </Row>

            /*
            <form onSubmit={this.onSubmit}>
                <input name="email" value={this.state.email} onChange={this.onChange} type="text" placeholder="Email Address" />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>
                {error && <p>{error.message}</p>}
            </form>
            */
        );
    }
}
const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export {PasswordForgetForm, PasswordForgetLink};