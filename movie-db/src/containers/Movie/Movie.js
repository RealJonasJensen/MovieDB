import React, { Component } from "react";

import axios from "axios";

import Loader from "../../components/UI/Loader/Loader";
import Aux from "../../hoc/Aux/Aux";
import MovieBackdrop from "../../components/UI/MovieBackdrop/MovieBackdrop";
import Error from "../../components/UI/Error/Error";

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
    }

    render() {

        let movie = <Loader />;
        if (this.state.movie) {
            console.log(this.state.movie.Title.length)

            movie = (

                <div className="movie" style={{ backgroundImage: `url(${this.state.movie.Poster})` }}>
                    {this.state.movie ? < MovieBackdrop /> : null}
                    <div className="movie-info">
                        <div className="movie-item item1 movie-info-div">
                            <img src={this.state.movie.Poster !== "N/A" ? this.state.movie.Poster : "/images/No_picture_available.png"} alt={this.state.movie.Title} />
                        </div>
                        <div className="movie-item item2 movie-info-div">
                            <p><b>Title:</b> {this.state.movie.Title}</p>
                            <p><b>Released:</b>  {this.state.movie.Year}</p>
                            <p><b>Country:</b>  {this.state.movie.Country}</p>
                            <p><b>Language:</b>  {this.state.movie.Language}</p>
                            <p><b>Director:</b>  {this.state.movie.Director}</p>
                            <p><b>Actors:</b>  {this.state.movie.Actors}</p>
                            <p><b>Writer:</b>  {this.state.movie.Writer}</p>
                            <p><b>Imdb Rating:</b>  {this.state.movie.imdbRating}</p>
                        </div>
                        <div className="movie-item item3 movie-info-div">
                            <p>{this.state.movie.Plot}</p>
                        </div>
                    </div>
                </div>

            )
        } else if (this.state.error) {
            movie = <Error>{this.state.error.message}</Error >
        }

        return (
            <Aux>
                {movie}
            </Aux>
        )
    }
}


export default Movie;