import './Project.css'

function Project(props) {
    return (
        <li className="project">
            <a href="#">
                <img src={props.img} alt="" className="project-img"/>
                <h3 className="project-title">{props.title}</h3>
            </a>
        </li>
    )
}

export default Project