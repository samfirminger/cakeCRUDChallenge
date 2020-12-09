import {Link} from "react-router-dom";
import React from "react";

const GoToHome = () => {
    return <Link to={`/`} style={{textDecoration: 'none', color: 'black'}}><h1>Go to Home</h1></Link>
};

export default GoToHome;