import React, { Component } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";


class Layout extends Component {
    state = {
        showSearch: false,
    }

    showSearchToggle = () => {
        this.setState(prevState => {
            return { showSearch: !prevState.showSearch }
        })
    }



    render() {
        return (
            <main>
                <Toolbar clicked={this.showSearchToggle} toggleStatus={this.state.showSearch} />
                {this.props.children}
            </main>
        )
    }
}

export default Layout;