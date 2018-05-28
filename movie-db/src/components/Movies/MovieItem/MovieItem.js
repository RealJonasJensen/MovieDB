import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import Aux from "../../../hoc/Aux/Aux";
import "./MovieItem.css";

class MovieItem extends Component {
    state = {
        showInfo: false,
    }

    onMouseOnHandler = () => {
        this.setState({ showInfo: true })
    }
    onMouseOffHandler = () => {
        this.setState({ showInfo: false })
    }

    render() {

        // const cssClass = ["movies-title-item", this.state.showInfo ? "info-open" : "info-closed"];
        // const cssReversClass = ["movies-title-item", !this.state.showInfo ? "info-open" : "info-closed"];

        const cssClass = ["movies-item-img", "inner", this.state.showInfo ? "showInfo" : "closeInfo"]

        let movie = (
            <div style={{ fontSize: this.props.fontStyleSize }} className="movies-title-item" onMouseEnter={this.onMouseOnHandler} onMouseOut={this.onMouseOffHandler} >
                <p className="item-info-text inner">
                    {this.props.title}
                </p>
                <div className={cssClass.join(" ")} style={{ backgroundImage: `url(${this.props.poster})` }} />
            </div>
        )

        // if (this.state.showInfo) {
        //     movie = <div className="movies-title-item-info" onMouseEnter={this.onMouseOnHandler} onMouseOut={this.onMouseOffHandler} >

        //     </div >
        // }

        const route = "/movie/" + this.props.id;

        return (
            <Aux>
                <NavLink to={route} exact >
                    {movie}
                </NavLink>
            </Aux >
        )
    }

}


export default MovieItem;