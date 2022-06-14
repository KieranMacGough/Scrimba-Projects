import React from "react";
import imgStar from "../images/Star 1.png";

function Card (props) {
    let badgeText
    if (props.experience.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.experience.location === "Online") {
        badgeText = "ONLINE"
    } else {
        badgeText = ""
    }
    return (
        <div className="card">
            {badgeText !== "" && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../images/${props.experience.coverImg}`)} className="card--image" alt={props.experience.img} />
            <div className="card--stats">
                <img src={imgStar} className="card--star" alt="star" />
                <span>{props.experience.stats.rating}</span>
                <span className="gray">({props.experience.stats.reviewCount}) • </span>
                <span className="gray">{props.experience.location}</span>
            </div>
            <p className="card--title">{props.experience.title}</p>
            <p className="card--price"><span className="bold">From ${props.experience.price}</span> / person</p>
        </div>
    )
}

export default Card;