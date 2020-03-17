import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="navbar__container">
                <div className="navbar__list_items_left">
                    <h1>Cella</h1>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/products"><li>Products</li></Link>
                    </ul>
                </div>
                <div className="navbar__list_items_right">
                    <ul>
                        <Link to="/auth/login"><li>Log In</li></Link>
                        <Link to="/auth/signup"><li>Sign Up</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;