import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="home__container">
                <h1>Welcome!</h1>
            </div>
        )
    }
}

export default Home;