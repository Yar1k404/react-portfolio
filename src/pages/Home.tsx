import React from "react";
import Header from "../components/header/Header";
import Project from "../components/project/Project"
import {projects} from "../components/utils/ProjectList";

function Home() {
    return (
        <div>
            <Header/>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((item) => {
                            return <Project title={item.title} img={item.img}/>
                        })}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Home