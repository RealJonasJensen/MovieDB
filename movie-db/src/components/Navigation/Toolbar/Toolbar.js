import React from "react";

import SearchInput from "../SearchInput/SearchInput";

import "./Toolbar.css";

const Toolbar = (props) => (
    <header className="toolbar-header">
        <div className="toolbar-items">
            <h2>MovieDB</h2>
            <div className="toolbar-items-info">
                <p onClick={props.clicked} className="toolbar-items-info-search" ><i className="fas fa-search"></i></p>
                <p>Made by Jonas Jensen</p>
            </div>
        </div>
        <SearchInput toggleStatus={props.toggleStatus} />
    </header>
)

export default Toolbar;