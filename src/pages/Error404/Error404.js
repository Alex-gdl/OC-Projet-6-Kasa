import React from "react";
import "./Error.scss";
import { NavLink } from "react-router-dom";

function Erreur404() {
    return(
        <div className="Error404">
            <h1 className="Error404H1">404</h1>
            <span className="ErrorMessage">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="Link-Header LinkError">Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default Erreur404;