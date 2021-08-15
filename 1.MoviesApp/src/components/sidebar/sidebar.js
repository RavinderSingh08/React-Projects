import React from 'react';
import './sidebar.css';
import SidebarButtons from '../sidebarButtons/sidebarButtons';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("hello");
    }

    compnentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    render() {
        console.log("redering");
        return (
            <div className="sidebar">
                <SidebarButtons text="All Genre" />
                <SidebarButtons text="Action" />
                <SidebarButtons text="Thriller" />
                <SidebarButtons text="Comedy" />
                <SidebarButtons text="Horror" />
                <SidebarButtons text="Sci-Fi" />
                <SidebarButtons text="Fantasy" />
            </div>
        );
    }
}

export default Sidebar;