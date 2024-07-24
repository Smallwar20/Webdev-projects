import React from "react"
import Globe from "/images/globe-svgrepo-com.svg"

export default function Header(){
    return(<header>
            <img src={Globe} alt="Globe" className="globe"/> 
            <h1 className="journal--headtitle">my travel journal.</h1>
        </header>)
}