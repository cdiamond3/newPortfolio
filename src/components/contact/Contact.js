import "./contact.scss"
import { useState } from "react"
import emailjs from 'emailjs-com'
import shake from "../../assets/shake.svg"

export default function Contact() {

    const [message, setMessage] = useState(false)
    const [userMessage, setUserMessage] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // EmailJS configuration
        const serviceID = 'service_frnhr5j'
        const templateID = 'template_wa36f0k'
        const userID = 'WVPyeduwSOSLD6goe'

        const templateParams = {
            from_name: email,
            email: email,
            message: userMessage,
            to_email: 'diamond.chris.3@gmail.com'
        }

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
                setMessage(true)
                setEmail("")
                setUserMessage("")
            }, (err) => {
                console.log('FAILED...', err)
            })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setUserMessage(e.target.value)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={shake} alt="contact" />
            </div>
            <div className="right">
                <h2> Contact Me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" value={email} onChange={handleEmailChange}></input>
                    <textarea value={userMessage} placeholder="Message" onChange={handleMessageChange}></textarea>
                    <button type="submit"> Send </button>
                    {message && <span> Thank you for your message! I will reply asap! </span>}
                </form>
            </div>
        </div>
    )
}