import React from "react";
import "./Tag.scss";

function Tag({nom}) {
    return(
        <span className="tag">{nom}</span>
    );
}

export default Tag;