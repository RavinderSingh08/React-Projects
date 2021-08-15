import React from 'react';
import './navbarButton.css';

class NavbarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="navbar-button">
                {this.props.text}
            </div>
        );
    }
}

export default NavbarButton;