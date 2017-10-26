import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

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

        this.compileFormData = this.compileFormData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // Put everything together and send it up to the register function
    compileFormData() {
        const { signupFunction } = this.props;
        const formData = this.state;
        signupFunction(formData);
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

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <div className="row justify-content-center my-3">
                        <h5>Take the first step to unleash your hackathon skills!</h5>
                    </div>
                    <div className="row justify-content-center my-3">
                        <Col sm={6} >
                            <Button classname="mb-2" size="lg" block outline color="primary"><span className="fa fa-facebook fa-lg"></span>  Sign up with Facebook</Button>
                        </Col>
                        <Col sm={6}>
                            <Button  className="mb-2" size="lg" block outline color="info"><span className="fa fa-github fa-lg"></span>  Sign up with Github</Button>
                        </Col>                   
                    </div>
                    <div className="text-center mb-3">
                        <h5>~ OR ~</h5>
                    </div>
                    <Form>
                        <FormGroup row>
                            <Label for="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="John"
                                type="text"
                                value={this.state.firstName}
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Smith"
                                type="text"
                                value={this.state.lastName}
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="user@email.com"
                                type="email"
                                value={this.state.email}
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="username"
                                type="text"
                                value={this.state.username}
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="password"
                                type="password"
                                value={this.state.password}
                            />
                            <span>
                                We recommend a password service like&nbsp;
                                <a href="https://www.lastpass.com/" target="_blank" rel="noopener noreferrer">LastPass</a>
                                &nbsp;or <a href="https://1password.com/" target="_blank" rel="noopener noreferrer">1Password</a>
                            </span>
                        </FormGroup>
                        <div className="row justify-content-center">
                            <Button outline color="primary" onClick={this.compileFormData} size="lg">Sign Up!</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}