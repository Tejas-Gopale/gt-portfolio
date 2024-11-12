import "./WorkCardStyle.css";
import pro1 from "../assects/project1.png"
import React from 'react'
import { NavLink } from "react-router-dom";

export const WorkCard = (props) => {
    return (
        <div className="prject-card">
            <img src={props.imgsrc} alt="project-img" />
            <h2 className="project-tital">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <NavLink to="view" className="btn">View</NavLink>
                    <NavLink to="source" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    )
}
