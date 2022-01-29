import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"
import React from 'react'

export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a className="logo"> The Immature Infants Club</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>@immatureinfants</span>
                    </div>
                    <div className="itemContainer">
                        <a className="mintLink" href="https://www.immatureinfants.com"> MINT HERE</a>
                        <br></br>
                        <a className="osLink" href="https://opensea.io/collection/the-immature-infants-club-official"> OPENSEA MARKET</a>
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
 