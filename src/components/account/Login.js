import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup } from 'reactstrap';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    // update state as email value changes
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    // catch enter clicks
    handleKeyPress(target) {
        if (target.charCode === 13) {
            this.handleValidSubmit();
        }
    }

    // update state as password value changes
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    // Handle submission once all form data is properly entered
    handleValidSubmit() {
      const { loginFunction } = this.props;
      const formData = this.state;
      loginFunction(formData);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-7 col-md-5 col-lg-4">
                    <AvForm onValidSubmit={this.handleValidSubmit}>
                        <AvGroup>
                            <Label for="userEmail">Email</Label>
                            <AvInput
                                id="userEmail"
                                name="email"
                                onChange={this.handleEmailChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="user@email.com"
                                required                              
                                type="email"
                                value={this.state.email}
                            />
                            <AvFeedback>Please input a valid email address to log in.</AvFeedback>
                        </AvGroup>
                        <AvGroup>
                          <Label for="userPassword">Password</Label>
                          <AvInput
                            id="userPassword"
                            name="password"
                            onChange={this.handlePasswordChange}
                            onKeyPress={this.handleKeyPress}
                            placeholder="password"
                            required
                            type="password"
                            value={this.state.password}
                          />
                          <AvFeedback>Your password is required to log in.</AvFeedback>
                        </AvGroup>
                        <FormGroup row className="justify-content-center">
                          <Button outline color="primary" size="lg">Log In</Button>
                        </FormGroup>
                    </AvForm>
                </div>
            </div>
        );
    }
}