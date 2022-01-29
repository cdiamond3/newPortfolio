import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Collectables", "Community", "Art", "Charity"]
        })
    },[])
    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="imgContainer">
                    <img className="infantPic" src="370.png" alt="selfie" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>We are</h2>
                    <h1>THE IMMATURE INFANTS CLUB</h1>
                    <h3>NFT <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="down.png" alt=" " />
                </a>
            </div>
        </div>
    )
}

