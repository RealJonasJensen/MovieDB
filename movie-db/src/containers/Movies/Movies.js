import React, { Component } from "react";

import * as actions from "../../store/actions/index";

import { connect } from "react-redux";

import "./Movies.css";

import MovieItem from "../../components/Movies/MovieItem/MovieItem";
import Loader from "../../components/UI/Loader/Loader";


class Movies extends Component {
    componentDidMount() {
        this.props.onFetchMovies("Avengers")
    }

    render() {
        const movies = !this.props.movies ? <Loader /> : this.props.movies.map(mov => {

            const fontStyleSize = mov.Title.length >= 40 ? ".6em" : "1em";

            return <MovieItem fontStyleSize={fontStyleSize} key={mov.imdbID} title={mov.Title} poster={mov.Poster} id={mov.imdbID} />
        }
        );

        return (
            <div className="movies-title">
                {movies}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: (term) => dispatch(actions.fetchMovies(term))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);