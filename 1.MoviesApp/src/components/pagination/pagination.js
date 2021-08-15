import React from "react";
import "./pagination.css";

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="pagination">
                <div className="pagination-button">1</div>
                <div className="pagination-button">2</div>
                <div className="pagination-button">3</div>

            </div>
        );
    }
}

export default Pagination;