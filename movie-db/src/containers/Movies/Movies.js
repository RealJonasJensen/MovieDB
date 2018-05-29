import React, { Component } from "react";

import * as actions from "../../store/actions/index";

import { connect } from "react-redux";

import "./Movies.css";

import MovieItem from "../../components/Movies/MovieItem/MovieItem";
import Loader from "../../components/UI/Loader/Loader";
import Aux from "../../hoc/Aux/Aux";
import Error from "../../components/UI/Error/Error";


class Movies extends Component {
    componentDidMount() {
        this.props.onFetchMovies("Avengers")
    }

    render() {
        let movies = <Loader />

        if (this.props.movies) {
            const newMovies = this.props.movies.map(mov => {
                const fontStyleSize = mov.Title.length >= 40 || mov.Title.split(" ")[0].length > 10 ? ".6em" : "1em";
                return <MovieItem fontStyleSize={fontStyleSize} key={mov.imdbID} title={mov.Title} poster={mov.Poster} id={mov.imdbID} />
            }
            );
            movies = <div className="movies-title"> {newMovies} </div>
        } else if (this.props.error) {
            movies = <Error>{this.props.error}</Error >
        }

        return (
            <Aux>
                {movies}
            </Aux>

        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies,
        error: state.movie.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: (term) => dispatch(actions.fetchMovies(term))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);