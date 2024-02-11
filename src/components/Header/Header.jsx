import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={Logo} alt="Logo"/>
            <nav>
                <NavLink to="/accueil" className="Link-Header LinkList">Accueil</NavLink>
                <NavLink to="/a-propos" className="Link-Header LinkList">A propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;