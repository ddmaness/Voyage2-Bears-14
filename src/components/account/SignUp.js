import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, Col } from 'reactstrap';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            background: '',
            skills: '',
            languages: '',
            timezone: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // Handle input changes
    handleInputChange(e) {
        this.setState({ [e.currentTarget.id]: e.target.value });
    }

    // catch enter clicks
    handleKeyPress(target) {
        if (target.charCode === 13) {
        target.preventDefault();
        this.compileFormData();
        }
    }

    // Handle submission once all form data is valid
    handleValidSubmit() {
      const { signupFunction } = this.props;
      const formData = this.state;
      signupFunction(formData);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <div className="row justify-content-center my-3">
                        <h5>Take the first step to unleash your hackathon skills!</h5>
                    </div>
                    <div className="row justify-content-center my-3">
                        <Col sm={6} >
                            <Button className="mb-2" size="lg" block outline color="primary"><span className="fa fa-facebook fa-lg"></span>  Sign up with Facebook</Button>
                        </Col>
                        <Col sm={6}>
                            <Button  className="mb-2" size="lg" block outline color="info"><span className="fa fa-github fa-lg"></span>  Sign up with Github</Button>
                        </Col>                   
                    </div>
                    <div className="text-center mb-3">
                        <h5>~ OR ~</h5>
                    </div>
                    <AvForm onValidSubmit={this.handleValidSubmit}>
                        <AvGroup row>
                            <Label for="email">Email</Label>
                            <AvInput
                                id="email"
                                name="email"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="user@email.com"
                                required
                                type="email"
                                value={this.state.email}
                            />
                            <AvFeedback>Please enter your valid email address.</AvFeedback>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="password">Password</Label>
                            <AvInput
                                id="password"
                                minLength="8"
                                name="password"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="password"
                                required
                                type="password"
                                value={this.state.password}
                            />
                            <AvFeedback>Passwords should contain at least eight characters.</AvFeedback>
                            <span>
                                We recommend a password service like&nbsp;
                                <a href="https://www.lastpass.com/" target="_blank" rel="noopener noreferrer">LastPass</a>
                                &nbsp;or <a href="https://1password.com/" target="_blank" rel="noopener noreferrer">1Password</a>
                            </span>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="username">Username</Label>
                            <AvInput
                                id="username"
                                name="username"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="username"
                                required
                                type="text"
                                value={this.state.username}
                            />
                            <AvFeedback>Please input a username.</AvFeedback>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="firstName">First Name</Label>
                            <AvInput
                                id="firstName"
                                name="firstName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="John"
                                required
                                type="text"
                                value={this.state.firstName}
                            />
                            <AvFeedback>Please enter your first name.</AvFeedback>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="lastName">Last Name</Label>
                            <AvInput
                                id="lastName"
                                name="lastName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Smith"
                                required
                                type="text"
                                value={this.state.lastName}
                            />
                            <AvFeedback>Please enter your last name.</AvFeedback>
                        </AvGroup>
                        <div className="row justify-content-center">
                            <Button outline color="primary" size="lg">Sign Up!</Button>
                        </div>
                    </AvForm>
                </div>
            </div>
        );
    }
}