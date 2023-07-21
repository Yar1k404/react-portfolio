import React from "react";

const frontendSkills: string[] = ['JavaScript', 'TypeScript','ReactJS', 'Angular', 'Redux', 'HTML', 'CSS', 'NPM', 'BootStrap', 'MaterialUI', 'Yarn', 'TailwindCSS', 'StyledComponents']
const backendSkills: string[] = ['NodeJS', 'MySQL', 'MongoDB', 'PHP', 'Laravel']

function Skills() {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Skills</h2>
                    <ul className="content-list">
                        <li className="content-item">
                            <h2 className="title-2">Frontend</h2>
                            <p>{frontendSkills.join(', ')}</p>
                        </li>
                        <li className="content-item">
                            <h2 className="title-2">Backend</h2>
                            <p>{backendSkills.join(', ')}</p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Skills