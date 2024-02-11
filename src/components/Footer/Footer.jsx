import React from "react";
import "./Footer.scss";
import logoFooter from "../../assets/images/Logo copy.png";

function Footer() {
    return(
        <footer>
            <div id="Footer">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2020 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;