import React, { useState } from "react";
import "./Carrousel.scss";
import arrow from "../../assets/images/Fleche.png";

function Carrousel({images}) {
    /* Crée un Hook d'état */
    let [ShowImage, ImageChanges] = useState(0);
    let ImageNumber = images.length;

    const ImagePrior = () => {
        if(ShowImage === 0) {
            ImageChanges(ImageNumber - 1);
        } else {
            ImageChanges(ShowImage - 1);
        }
        return(ImageChanges);
    };  

    const NextImage = () => {
        if(ShowImage === ImageNumber - 1) {
            ImageChanges(ImageNumber = 0);
        } else {
            ImageChanges(ShowImage + 1);
        }
        return(ImageChanges);
    };

    return(
        <div className="carrousel">
            {
                ImageNumber > 1 && <img className="arrow arrow-left" src={arrow} alt="précedénte image" onClick={ImagePrior}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === ShowImage ? 'ImageCarrousel actif' : 'ImageCarrousel'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                ImageNumber > 1 && <img className="arrow arrow-right" src={arrow} alt="image suivante" onClick={NextImage}/>
            }
        </div>
    );
}

export default Carrousel;