import React from "react";
import './index.css'


const Track = ({ image, title, artist, link, login }) => {
    return (
            
    <div className="item">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h4>{artist}</h4>
        <a href={link} target='blank'>Visit</a>
        <a href={login} target='blank'>Login</a>
    </div>
        
)
}

export default Track