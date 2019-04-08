import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img src={photo} atr={destination} width='500px' height='300px'/>
        <h2>{destination}, {country}</h2>
        <p>{distance}</p>
    </figure>
);

export default Travel;