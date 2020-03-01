import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const style = {
    marginLeft: "30px"
};
const opacity = {
    opacity: "0.8"
}

const SignInPage = () => (
    <div className="container" >
        <SignInForm/>
    </div>
);

const INITIAL_STATE = {
    email:'',
    password:'',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
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
        const { email, password, error} = this.state;

        const isInvalid = password ==='' || email ==='';

        return (
    
            <Container>
                <Row className="justify-content-md-center">
                    <Jumbotron style={opacity}>
                        <Col md="auto">
                            <h1>Sign In</h1>
                            <hr />
                            <Form onSubmit={this.onSubmit}autocomplete="off" >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" value={email} onChange={this.onChange} type="text" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" value={password} onChange={this.onChange} type="password" placeholder="Password" />
                                </Form.Group>
                                <Button  disabled={isInvalid} variant="primary" type="submit">
                                    Sign In
                                </Button>
                                <SignUpLink style={style} />
                                <PasswordForgetLink/>
                                {error && <p>{error.message}</p>}
                            </Form>
                        </Col>
                    </Jumbotron>
                </Row>
            </Container>
            
            
            /*
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>
                {error && <p>{error.message}</p>}
            </form>
            */
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase);

export default SignInPage;
export { SignInForm };