import React from 'react';
import './SignUp.css';

import AuthService from '../../../services/AuthService';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.Auth = new AuthService();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm = async event => {
        event.preventDefault();

        const { firstName, lastName, email, password } = this.state;

        await this.Auth.signup(firstName, lastName, email, password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };


    render() {
        const { firstName, lastName, email, password } = this.state;
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />

                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;