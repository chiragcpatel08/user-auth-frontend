import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navigation () {

    const [isBoxVisible, toggleBox] = useState(false);

    return (  
        
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Home</Link>
            <button onClick = {() => {toggleBox(!isBoxVisible)}} className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className={`collapse navbar-collapse justify-content-end ${isBoxVisible ? "show" : ""}`}>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>               
                <li className="nav-item">
                    <Link to="/register" className="nav-link" >Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Logout</Link>
                </li>
                </ul>                
            </div>
        </nav>
    )
}

export default Navigation;