import React from "react";

const travels = [
  {
    photo:"https://www.ichep2018.org/images/sub_tourist01.jpg",
    destination:"Seoul",
    country:"South Korea",
    distance:"8,122 km"
  },
  {
    photo:"https://www.travelalerts.ca/wp-content/uploads/2018/08/Santorini.jpg",
    destination:"Santorini",
    country:"Greece",
    distance:"2,650 km"
  },
  {
    photo:"https://s3.eu-west-1.amazonaws.com/originaltravel.assets.d3r.com/images/gallery-larger/437730-budapest-night-lights.jpg",
    destination:"Budapest",
    country:"Hungary",
    distance:"875 km"
  },
  {
    photo:"https://www.triptaptoe.com/wp-content/uploads/2016/08/lyon-500x300.jpeg",
    destination:"Lyon",
    country:"France",
    distance:"1,225 km"
  },
  {
    photo:"https://centralhotellondon.com/wp-content/uploads/2018/12/web-london-city-corbis-500x300.jpg",
    destination:"London",
    country:"UK",
    distance:"1,094 km"
  },
  {
    photo:"https://seahub-cdn-prod.s3.amazonaws.com/ports-pages/Barcelona%20Small.jpeg",
    destination:"Barcelona",
    country:"Spain",
    distance:"1,864 km"
  }
  
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <figure>
                <img src={travel.photo} atr={travel.destination} width='500px' height='300px'/>
                <h2>{travel.destination}, {travel.country}</h2>
                <p>{travel.distance}</p>
            </figure>
        ))}
    </div>
);

export default Travels;