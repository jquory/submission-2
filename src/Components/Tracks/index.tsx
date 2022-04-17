import React from "react";
import './index.css'


const Track = ({ data, selected, setSelected }) => {
    console.log(data)
    return (
        <div className="wrap">
            <div className="item">
        <img src={data.album.images[0].url} alt={data.title} />
        <div className="item-body">
            <div className="title">
                <h3>{data.name}</h3>
                <h4>{data.album.artists[0].name}</h4>
            </div>
            <div className="button">
            {selected.includes(data.uri) ? (
                <button className="btn" onClick={()=> setSelected(selected.filter((uri) => uri !== data.uri))}>Deselect</button>
            ) : (
                <button className="btn" onClick={() => setSelected([...selected, data.uri])}>Select</button>
            )}
        
            </div>
        </div>
        </div>
        
    </div>
        
    )
}

export default Track