import React, { Component } from "react";

import axios from "axios";

import Loader from "../../components/UI/Loader/Loader";
import Aux from "../../hoc/Aux/Aux";
import MovieBackdrop from "../../components/UI/MovieBackdrop/MovieBackdrop";

import "./Movie.css"

class Movie extends Component {
    state = {
        movie: null,
        error: null,
        loading: false
    }

    componentDidMount() {
        this.getData(this.props.match.params.id)
    }

    getData = (term) => {
        this.setState({ loading: true })
        axios.get(`http://www.omdbapi.com/?i=${term}&apikey=thewdb`)
            .then(response => this.setState({ loading: false, movie: response.data }))
            .catch(err => this.setState({ loading: false, error: err }))
        console.log(this.props.match.params.id)
    }

    render() {

        let movie = <Loader />;
        if (this.state.movie) {
            console.log(this.state.movie)
            movie = (
                <Aux>
                    <div className="movie" style={{ backgroundImage: `url(${this.state.movie.Poster})` }}>
                        {this.state.movie ? < MovieBackdrop /> : null}
                        <div className="movie-info">
                            <div className="movie-info-div"></div>
                            <div className="movie-info-div"></div>
                            <div className="movie-info-div"></div>
                        </div>
                    </div>
                </Aux>
            )
        }

        return (
            <div>

                {movie}

            </div>
        )
    }
}


export default Movie;