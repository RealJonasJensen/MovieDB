import React from "react";

import Aux from "../../../hoc/Aux/Aux";

const Input = (props) => {

    return (
        <Aux>
            <input onChange={props.change} value={props.value} type={props.type} name={props.name} className={props.class} placeholder={props.placeholder} />
        </Aux>

    )
}

export default Input;