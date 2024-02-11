import React from "react";
import "./PageLogement.scss";
import { useParams, Navigate } from 'react-router-dom';
import Logements from "../../assets/data/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import RedStar from "../../assets/images/Etoile.png";
import GreyStart from "../../assets/images/EtoileVide.png";
import Collapse from "../../components/Collapse/Collapse";

function PageLogement() {
    const { id } = useParams();
    const rental = Logements.find(logement => logement.id === id);

    if (!rental) {
        return <Navigate replace to="/Error404" />;
    }

    const renderTags = rental?.tags.map((tag, index) => (
        <Tag key={index} nom={tag} />
    ));

    const renderRating = () => {
        const ratingStars = [];
        let redStar = true;

        for (let index = 0; index < 5; index++) {
            if (index === parseInt(rental?.rating)) {
                redStar = false;
            }
            ratingStars.push(
                <img
                    key={index}
                    className="star"
                    src={redStar ? RedStar : GreyStart}
                    alt={`${rental?.rating}/5`}
                />
            );
        }

        return ratingStars;
    };

    const renderEquipment = rental?.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
    ));

    return (
        <div className="PageLogement">
            <Carrousel images={rental?.pictures} />
            <div className="RentalHost">
                <div className="RentalInfo">
                    <span className="RentalTitle">{rental?.title}</span>
                    <span className="RentalLocation">{rental?.location}</span>
                    <div className="tags">{renderTags}</div>
                </div>
                <div className="HostRate">
                    <div className="HostInfo">
                        <span className="HostName">{rental?.host.name}</span>
                        <img
                            className="HostImage"
                            src={rental?.host.picture}
                            alt="Host"
                        />
                    </div>
                    <div className="Rate">{renderRating()}</div>
                </div>
            </div>
            <div className="EquipmentsInfo">
                <Collapse titre="Description" description={rental?.description} />
                <Collapse titre="Equipment" description={renderEquipment} />
            </div>
        </div>
    );
}

export default PageLogement;
