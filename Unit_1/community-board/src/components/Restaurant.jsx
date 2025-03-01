import React from "react";

const Restaurant = (props) => {
    return (
        <div className="res-block">
            <div className="img-container">
                <img src={props.photo} />
            </div>
            <div className="content">
                <h3>{props.name}</h3>
                <h4>{props.cuisine}</h4>
                <a href={props.link} target="_blank"><button>Learn More</button></a>
            </div>
        </div>
    )
}


export default Restaurant;