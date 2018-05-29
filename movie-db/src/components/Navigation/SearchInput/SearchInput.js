import React, { Component } from "react";

import Input from "../../UI/Input/Input";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../../store/actions/index";

import "./SearchInput.css";


class SearchInput extends Component {
    state = {
        searchTerm: ""
    }

    onChangeHandler = async (event) => {
        if (this.props.location.pathname !== "/") { this.props.history.push("/") };
        await this.setState({ searchTerm: event.target.value });
        await this.props.onFetchMovies(this.state.searchTerm === "" ? "king" : this.state.searchTerm);
    }

    render() {

        const inputClass = this.props.toggleStatus ? "search-input open" : "search-input closed";

        return (
            <div className={inputClass}>
                <Input change={this.onChangeHandler} value={this.state.searchTerm} name="search" type="text" class="search-input-search" placeholder="Search for a movie or series" />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: (term) => dispatch(actions.fetchMovies(term))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(SearchInput));