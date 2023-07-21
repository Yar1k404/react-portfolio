import React from "react";

function Contacts() {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Contacts</h2>
                    <ul className="content-list">
                        <li className="content-item">
                            <h2 className="title-2">Location</h2>
                            <p>Vinnitsa, Ukraine</p>
                        </li>
                        <li className="content-item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:dev@gmail.com">dev@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Contacts