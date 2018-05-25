import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import "./Movies.css";


class Movies extends Component {
    componentDidMount() {
        this.props.onFetchMovies("top");
    }

    render() {

        console.log(this.props.movies)
        let movies = "Loading...";

        if (this.props.movies) {
            movies = this.props.movies.map((mov, index) => (
                <div className="movies-title-item" key={mov.imdbID}>
                    <img src={mov.Poster} alt={mov.Title} />
                    <p>
                        {mov.Title}
                    </p>
                </div>
            ))
        }

        return (
            <div className="movies-title">
                {movies}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: (term) => dispatch(actions.fetchMovies(term))
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);