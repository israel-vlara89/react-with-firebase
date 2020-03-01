import React,  { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const opacity = {
    opacity: "0.9"
}

const SignUpPage = () => (
    <div>
       <SignUpForm/>
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne:'',
    passwordTwo: '',
    isAdmin: false,
    error: null,
};


class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };

    }

    onSubmit = event => {
        const { username, email, passwordOne , isAdmin} = this.state;
        const roles = {};

        if(isAdmin){
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in Firebase realtime database
                return  this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles,
                    })
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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

    onChangeCheckBox = event => {
        this.setState({ [event.target.name ]: event.target.checked });
    };

    render(){

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            isAdmin,
            error,
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === "" || email ==="" || username === "";
    

        return(
            <Row className="justify-content-lg-center">
                <Jumbotron style={opacity}>
                    <Col lg="auto">
                        <h1 className="biggerSize">Sign Up</h1>
                        <hr />
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="username" value={username} onChange={this.onChange} type="text" placeholder="Full Name" />
                            </Form.Group>                                <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPasswordOne">
                               <Form.Label>Password</Form.Label>
                               <Form.Control name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPasswordTwo">                                    <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Label>
                                Admin: <input name="isAdmin" tyep="checkbox" checked={isAdmin} onChange={this.onChangeCheckbox} />
                             </Form.Label>
                            <Button  disabled={isInvalid} variant="primary" type="submit">
                                Sign Up
                            </Button>
                            {error && <p>{error.message}</p>}
                        </Form>
                    </Col>
                </Jumbotron>
            </Row>
        );
    }
}

const SignUpLink = () => (
    <p><Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export {SignUpForm, SignUpLink };