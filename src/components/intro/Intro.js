import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="imgContainer">
                    <img src="../man.png" alt="selfie" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Chris Diamond</h1>
                    <h3>Freelance <span> Designer </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="../down.png" alt=" " />
                </a>
            </div>
        </div>
    )
}

