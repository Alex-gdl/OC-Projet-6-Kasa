import React from "react";
import "./Apropos.scss";
import Banner from "../../components/Banner/Banner";
import AproposBanner from "../../assets/images/Banniere.png";
import Collapse from "../../components/Collapse/Collapse";

function Apropos() {
    return(
        <div className="APropos">
            <Banner image={AproposBanner} titre=""/>
            <Collapse titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Collapse titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse titre="Service" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
    );
}

export default Apropos;