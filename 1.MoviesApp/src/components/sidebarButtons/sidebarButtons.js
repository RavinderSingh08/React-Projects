import React from "react";
import "./sidebarButtons.css";

class SidebarButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // console.log("hello");
    }

    compnentDidMount() {
        // console.log("Component Mounted");
    }

    componentDidUpdate() {
        // console.log("Component Updated");
    }

    render() {
        console.log("redering");
        return (
            <div className="sidebar-button">
                {this.props.text}
            </div>
        );
    }
}

export default SidebarButtons;