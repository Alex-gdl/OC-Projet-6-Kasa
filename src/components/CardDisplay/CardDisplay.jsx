import React from "react";
import "./CardDisplay.scss";

function CardDisplay({id, image, titre}) {
    return(
        <div className="CardDisplay" id={id}>
            <img className="Image-CardDisplay" src={image} alt="CardDisplay"/>
            <div className="Light-CardDisplay"></div>
            <span className="Title-CardDisplay">{titre}</span>
        </div>
    );
}

export default CardDisplay;