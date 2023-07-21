import React from "react";
import {useEffect, useRef} from "react";
import {useLocalStorage} from "../utils/useLocalStorage";
import sun from "./sun.svg";
import moon from "./moon.svg";
import './BtnDarkMode.css'

function BtnDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light')

    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn-active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn-active')
        }
    }, [darkMode])

    const toggleDarkMode = (): void => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="" className="dark-mode-btn-icon"/>
            <img src={moon} alt="" className="dark-mode-btn-icon"/>
        </button>
    )
}

export default BtnDarkMode