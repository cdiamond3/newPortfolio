import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"
import React from 'react'

export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> Chris Diamond</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+1 720-937-1151</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <a href="mailto:diamond.chris.3@gmail.com">diamond.chris.3@gmail.com</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}