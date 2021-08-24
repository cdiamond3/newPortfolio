import "./contact.scss"
import { useState } from "react"

export default function Contact() {


    const [message, setMessage] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setMessage(" ")
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="shake.svg" alt="contact" />
            </div>
            <div className="right">
                <h2> Contact Me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" onClick={handleClick}> Send </button>
                    {message && <span> Thank you for your message! I will reply asap! </span>}
                </form>
            </div>
        </div>
    )
}
