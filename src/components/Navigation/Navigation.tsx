import React from "react";
import Aux from "../../hoc/Aux/Aux";
import './Navigation.css'
const navigation = () => {

    return (
    <Aux>
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    </Aux> 
    )
}

export default navigation;