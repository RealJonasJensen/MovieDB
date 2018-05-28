import React from "react";

import SearchInput from "../SearchInput/SearchInput";

import { NavLink, withRouter } from "react-router-dom"


import "./Toolbar.css";

const Toolbar = (props) => (
    <header className="toolbar-header">
        <div className="toolbar-items">
            <NavLink to="/"><h2>MovieDB</h2></NavLink>
            <div className="toolbar-items-info">
                <p className="toolbar-search" onClick={props.clicked}>Search</p>
                <p>||</p>
                <p>Made by Jonas Jensen</p>
            </div>
        </div>
        <SearchInput toggleStatus={props.toggleStatus} />

        <div className="toolbar-div"></div>
    </header>
)

export default withRouter(Toolbar);