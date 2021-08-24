import "./works.scss"
import { useState } from "react"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)


    const data = [
        {
            id: "1",
            icon: "globe.png",
            title: "Web Design",
            desc: "Expansive knowledge of both the front-end and back-end development of web applications.",
            img: "https://static01.nyt.com/images/2020/12/23/business/23Techfix-illo/23Techfix-illo-mediumSquareAt3X.jpg"
        },
        {
            id: "2",
            icon: "mobile.png",
            title: "Mobile Design",
            desc: "Strong Experience in mobile design and app development.",
            img: "https://static01.nyt.com/images/2020/07/30/business/29Techfix-illo/30Techfix-illo-mediumSquareAt3X.jpg"
        },
        {
            id: "3",
            icon: "writing.png",
            title: "Branding",
            desc: "Strong understanding of social media algorithms and brand recognition",
            img: "https://s3-eu-west-1.amazonaws.com/lekiosque-eu/Public/Publications/21561783/21654934/srcImages/image_45_0.jpg"
        },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }



    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="mobile" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    {/* <span>Projects</span> */}
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="sliderPhoto1" />
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <img src="arrow.png" alt="sliderArrowLeft" className="arrow left" onClick={() => handleClick("left")} />
            <img src="arrow.png" alt="sliderArrowRight" className="arrow right" onClick={() => handleClick("right")} />
        </div >
    )
}
