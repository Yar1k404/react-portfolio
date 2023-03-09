import './Header.css'
import BtnDownload from "../btnDownload/BtnDownload";

function Header() {
    return (
        <div>
            <header className="header">
                <div className="header-wrapper">
                    <h1 className="header-title">
                        <strong>Hi, my name is <span>Yaroslav</span></strong><br/>
                        a frontend developer
                        <div className="header-text">
                            <p>with passion for learning and creating.</p>
                        </div>
                        <BtnDownload link='https://github.com/Yar1k404'/>
                    </h1>
                </div>
            </header>
        </div>
    )
}

export default Header