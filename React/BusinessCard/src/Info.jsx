import React from  "react"
import PlacefolderPhoto from "./assets/ProfilePlacholder.jpg"
import EmailLogo from "./assets/email.png"
import LinkedinLogo from "./assets/linkedin.png"

export default function Info(){
    return(
        <div className="card--info">
            <img src={PlacefolderPhoto} className="info--pfp"/> 
            <h1>MyName</h1>
            <h2>MyJob Description</h2>
            <h3>Mywebsite.com</h3>
            <div className="info--buttons">
                <button className="info--Email"><img src={EmailLogo}/>Email</button>
                <button className="info--Linkedin"><img src={LinkedinLogo}/>Linkedin</button>
            </div>
        </div>
    )
}