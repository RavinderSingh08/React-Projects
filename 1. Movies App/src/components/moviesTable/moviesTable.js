import React from 'react';
import './moviesTable.css';
import MoviesTableRows from '../moviesTableRow/moviesTableRows';

class MoviesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = this.props.data;
        
        let header = {
            sno: "S.No",
            name: "Title",
            genre: "Genre",
            rating: "Rating",
        }

        let rows = [];

        for (let i of data) {
            rows.push(<MoviesTableRows key={i.sno} data={i}></MoviesTableRows>);
        }

        return (
            <div className="movies-table">
                <MoviesTableRows data={header} header={true} />
                {rows}
            </div>
        );
    }
}

export default MoviesTable;