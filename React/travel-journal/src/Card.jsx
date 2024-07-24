import React from "react"
import Pinpoint from "/images/pinpoint-svgrepo-com.svg"

export default function Card(props){
    return(
    <div className="card">
        <img src={props.imageUrl} alt="location" className="card-imgloc"/>
        <div className="card-grid">
            <nav>
                <img src={Pinpoint} alt="pinpoint" className="card-pinpoint"/>
                <h1 className="card-location">{props.location}</h1>
                <a href={props.googleMapsUrl} target="_blank" className="card-gmaps-link">View on Google Maps</a>
            </nav>
            <section className="card-section">
                <h1 className="card-title">{props.title}</h1>
                <h2 className="card-schedule">{props.startDate} - {props.endDate}</h2>
                <h3 className="card-desc">{props.description}</h3>
            </section>
            <hr></hr>
        </div>
    </div>)
}