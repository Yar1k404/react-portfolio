import React from "react";
import './Project.css'

interface ProjectList {
    title: string,
    img: any
}

function Project({title, img}: ProjectList) {
    return (
        <li className="project">
            <a href="#">
                <img src={img} alt="" className="project-img"/>
                <h3 className="project-title">{title}</h3>
            </a>
        </li>
    )
}

export default Project