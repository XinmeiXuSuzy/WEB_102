import React from "react";

const Restaurant = (props) => {
    return (
        <div className="res-block">
            <div className="img-container">
                <img src={props.photo} />
                <div className='overlay'>
                    <div className="showtext">
                        <h5 className="cuisine">{props.cuisine}</h5>
                        <p className="dishes">{props.dishes}</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <h3>{props.name}</h3>
                <a href={props.map} target="_blank"><h4><i class="fa-solid fa-location-dot"></i>{" "}{props.location}</h4></a>
                <a href={props.link} target="_blank"><button>LEARN MORE</button></a>
            </div>
        </div>
    )
}


export default Restaurant;