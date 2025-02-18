import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"
import man from "../../assets/man.png" // Adjust the path as needed
import down from "../../assets/down.png" // Adjust the path as needed
export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Front End", "Back End", "Design"]
        })
    },[])
    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="imgContainer">
                    <img className="selfie" src={man} alt="Selfie of Chris Diamond" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Chris Diamond</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={down} alt=" " />
                </a>
            </div>
        </div>
    )
}