import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            background: '',
            skills: '',
            languages: '',
            timezone: ''
        }; 
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        //for debugging REMOVE BEFORE PULL REQUEST
        console.log(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {firstName, lastName, email, username, password, background, skills, languages, timezone} = this.state;
        axios.post('/users', {
            firstName,
            lastName,
            email,
            username,
            password,
            background,
            skills,
            languages,
            timezone
        })
        .then((response) => {
            console.log(response.data);
        })
    }

    render() {
        //
        const {firstName, lastName, email, username, password, background, skills, languages, timezone} = this.state;
        return (
        <div>
            <section>
                <form onSubmit = {this.onSubmit}>
                    <label>First Name
                    <input type = 'text' name = 'firstName' value = {firstName} onChange = {this.onChange} />
                    </label>
                    <label>Last Name
                    <input type = 'text' name = 'lastName' value = {lastName} onChange = {this.onChange} />
                    </label>
                    <label>Email
                    <input type = 'email' name = 'email' value = {email} onChange = {this.onChange} />
                    </label>
                    <label>Username
                    <input type = 'text' name = 'username' value = {username} onChange = {this.onChange} required />
                    </label>
                    <label>Password
                    <input type = 'password' name = 'password' value = {password} onChange = {this.onChange} />
                    </label>
                    <label>Background
                    <input type = 'textarea' name = 'background' value = {background} onChange = {this.onChange} />
                    </label>
                    <label>Skills
                    <input type = 'textarea' name = 'skills' value = {skills} onChange = {this.onChange} />
                    </label>
                    <label>Languages
                    <input type = 'text' name = 'languages' value = {languages} onChange = {this.onChange} />
                    </label>
                    <label>Timezone
                    <input type = 'text' name = 'timezone' value = {timezone} onChange = {this.onChange} />
                    </label>
                    <input type = 'submit' value = 'Register'/>
                </form> 
            </section>
        </div>
        );
    }
}

export default SignUp;