import React from 'react';
import './moviesTableRows.css';

class MoviesTableRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { sno, name, genre, rating } = this.props.data;
        return (
            <div className="movies-table-rows" style={this.props.header ? { fontWeight: "bold", backgroundColor: "#2b2b2b", color: "white", borderRadius : "5px"} : {}}>
                <div className="column serial-number">{sno + "."}</div>
                <div className="column movies-name">{name}</div>
                <div className="column genre">{genre}</div>
                <div className="column  ratings">{rating}</div>
            </div>
        );
    }
}

export default MoviesTableRows;