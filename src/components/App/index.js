import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import AboutPage from '../About';
import ContactPage from '../Contact';
import FooterPage from '../FooterPage';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const BackgroundHead = {
    backgroundImage: "linear-gradient(-90deg, red, yellow)"
    };

const App = () => (
    <Router>
        <Container>
                <Navigation/>

                <br />

                <Route exact path={ROUTES.LANDING} component={LandingPage} /> 
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} /> 
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} /> 
                <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> 
                <Route exact path={ROUTES.HOME} component={HomePage} /> 
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route exact path={ROUTES.ADMIN} component={AdminPage} />  
                <Route exact path={ROUTES.ABOUT} component={AboutPage} />
                <Route exact path={ROUTES.CONTACT} component={ContactPage} />
            
            <FooterPage/>
        </Container>
    
    </Router>
);

export default withAuthentication(App);



