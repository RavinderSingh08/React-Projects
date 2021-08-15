import React from "react";
import "./moviesList.css";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import MoviesTable from "../../components/moviesTable/moviesTable";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Pagination from "../../components/pagination/pagination";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    search = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        let data = [{
            sno: 1,
            name: "The Shawshank Redemption",
            genre: "Drama",
            rating: 9.2
        }, {
            sno: 2,
            name: "The Godfather",
            genre: "Crime Drama",
            rating: 9.1
        }, {
            sno: 3,
            name: "The Dark Night",
            genre: "Action Crime Drama",
            rating: 9.0
        }, {
            sno: 4,
            name: "12 Angry Men",
            genre: "Crime Drama",
            rating: 8.9
        }, {
            sno: 5,
            name: "The Lord of the Rings: The Return of the King",
            genre: "Action Adventure Drama",
            rating: 8.8
        }, {
            sno: 6,
            name: "Inception",
            genre: "Action Adventure Sci-Fi",
            rating: 8.7
        }, {
            sno: 7,
            name: "The Matrix",
            genre: "Action Sci-Fi",
            rating: 8.6
        }, {
            sno: 8,
            name: "Intersteller",
            genre: "Adventure Drama Sci-Fi",
            rating: 8.5
        }, {
            sno: 9,
            name: "Back to the Future",
            genre: "Adventure Comedy Sci-Fi",
            rating: 8.5
        }, {
            sno: 10,
            name: "The Shining",
            genre: "Drama Horror",
            rating: 8.4
            // }, {
            //     sno: 11,
            //     name: "Avengers: Infinity War",
            //     genre: "Action Adventure Sci-Fi",
            //     rating: 8.4
            // }, {
            //     sno: 12,
            //     name: "Joker",
            //     genre: "Crime Drama Thriller",
            //     rating: 8.4
            // }, {
            //     sno: 13,
            //     name: "Spider-Man: Into the Spider-Verse",
            //     genre: "Animation Action Adventure",
            //     rating: 8.4
            // }, {
            //     sno: 14,
            //     name: "Avengers: Endgame",
            //     genre: "Action Adventure Sci-Fi",
            //     rating: 8.3
            // }, {
            //     sno: 15,
            //     name: "3 Idiots",
            //     genre: "Comedy Drama",
            //     rating: 8.3
            // }, {
            //     sno: 16,
            //     name: "Shutter Island",
            //     genre: "Mystery Thriller",
            //     rating: 8.1
            // }, {
            //     sno: 17,
            //     name: "V for Vendetta",
            //     genre: "Action Drama Sci-Fi",
            //     rating: 8.1
            // }, {
            //     sno: 18,
            //     name: "Blade Runner",
            //     genre: "Action Sci-Fi Thriller",
            //     rating: 8.1
            // }, {
            //     sno: 19,
            //     name: "Jurassic Park",
            //     genre: "Action Adventure Sci-Fi",
            //     rating: 8.1
            // }, {
            //     sno: 20,
            //     name: "Logan",
            //     genre: "Action Drama Sci-Fi",
            //     rating: 8.0
        }];

        let filteredData = data.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();
            return movieName.includes(search);
        })

        return (
            <div className="main-container">
                <Navbar />
                <Sidebar />
                <div className="movies-table-container">
                    <div className="search-input">
                        <input type="text" value={this.state.search} placeholder="Search for Movies & TV Series..." className="movies-search" onChange={this.search}></input>
                        <div className="search-icon">
                            <SearchRoundedIcon />
                        </div>
                    </div>
                    <MoviesTable data={filteredData} />
                    <Pagination />
                </div>
            </div>
        );
    }
}

export default MoviesList;