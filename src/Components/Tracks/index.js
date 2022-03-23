import React from "react";

const Track = ({ image, title, artist }) => {
    return (
        <>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{artist}</p>
        </>

)
}

export default Track