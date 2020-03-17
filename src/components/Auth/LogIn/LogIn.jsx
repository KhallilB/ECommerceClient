import React from 'react';
import './LogIn.css';

import AuthService from '../../../services/AuthService';

class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
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

        const { email, password } = this.state;

        await this.Auth.login(email, password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        const { email, password } = this.state
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.submitForm}>
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

export default LogIn;