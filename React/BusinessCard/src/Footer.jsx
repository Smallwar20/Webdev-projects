import React from  "react"
import Twitter from "./assets/TwitterIcon.png"
import Facebook from "./assets/FacebookIcon.png"
import Instagram from "./assets/InstagramIcon.png"
import Github from "./assets/GitHubIcon.png"

export default function Info(){
    return(
        <footer className="main--foot">
            <img src={Twitter}/>
            <img src={Facebook}/>
            <img src={Instagram}/>
            <img src={Github}/>
        </footer>
    )
}