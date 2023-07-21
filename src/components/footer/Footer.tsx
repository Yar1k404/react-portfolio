import React from "react";
import './Footer.css'
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <ul className="social">
                            <li className="social-item">
                                <a href="https://instagram.com" target={'_blank'}>
                                    <img src={instagram} alt=""/>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://twitter.com" target={'_blank'}>
                                    <img src={twitter} alt=""/>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://linkedin.com" target={'_blank'}>
                                    <img src={linkedIn} alt=""/>
                                </a>
                            </li>
                        </ul>
                        <div className="copyright">
                            <p>© 2023 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer