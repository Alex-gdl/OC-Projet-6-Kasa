import React, { useState } from "react";
import "./Collapse.scss";
import arrow from "../../assets/images/Fleche.svg";

function Collapse({titre, description}) {

    const [Open, IsOpen] = useState(false);

    return(
        <div className="collapse" id={`collapse-${titre}`}>
            <div className="CollapseHeader">
                <div className="CollapseTitle">{titre}</div>
                <span className={`arrow-collapse ${Open}`} onClick={() => IsOpen(!Open)}>
                    <img src={arrow} alt="Ouvrir"/>
                </span>
            </div>
            {
                Open && <div className="CollapseDescription">{description}</div>
            }
        </div>
    );
}

export default Collapse;