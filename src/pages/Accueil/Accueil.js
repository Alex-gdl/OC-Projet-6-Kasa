import React from "react";
import "./Accueil.scss";
import Banner from "../../components/Banner/Banner";
import AccueilBanner from "../../assets/images/Banniere copy.png";
import { NavLink } from "react-router-dom";
import CardDisplay from "../../components/CardDisplay/CardDisplay";
import Logements from "../../assets/data/logements.json";

function Accueil() {
    return(
        <div className="Accueil">
            <Banner image={AccueilBanner} texte="Chez vous, partout et ailleurs"/>
            <div className="LogementAccueil">
                {Logements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><CardDisplay key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Accueil;