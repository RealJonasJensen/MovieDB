import React from "react";

import "./Error.css";

const Error = (props) => (
    <div className="error" ><p>It seems like there was an error!</p><p>{props.children}</p></div>
)

export default Error;