import React, { useState } from "react";
import "./Collapse.scss";
import arrow from "../../assets/images/Fleche.svg";

function Collapse({ titre, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse-${titre}`}>
      <div className="CollapseHeader">
        <div className="CollapseTitle">{titre}</div>
        <span
          className={`arrow-collapse ${isOpen ? '' : 'open'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={arrow} alt="Ouvrir" />
        </span>
      </div>
      {isOpen && <div className="CollapseDescription">{description}</div>}
    </div>
  );
}

export default Collapse;
