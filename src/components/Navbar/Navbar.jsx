import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="navbar__container">
                <div className="navbar__list_items">
                    <h1>Cella</h1>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                    </ul>
                </div>
                <div className="navbar__list_items">
                    <ul>
                        <li>Log In</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;