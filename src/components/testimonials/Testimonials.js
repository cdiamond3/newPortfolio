import "./testimonials.scss"
export default function Testimonials() {




    const data = [
        {
            id: 1,
            name: "Tony S",
            title: "Front-End/UI Designer",
            img: "Tony.jpg",
            icon: "youtube.png",
            desc: "During our time together at Flatiron School, Chris and I worked together on projects often. He was always fun to work with, and I can’t say enough about his dedication and hard work. He is insightful, innovative, and won’t stop until the job is done and done right."

        },
        {
            id: 2,
            name: "Lindsay C",
            title: "Hair Stylist/Entrepreneur",
            img: "Lindsay.jpg",
            icon: "linkedin.png",
            desc: "Chris has helped changed my world! As a entreprenuer it is so important that my website and social media looks and functions well! Chris did just that and more! His background in media brings elements to his projects that I have not seen before!",
            featured: true
            
        },
        {
            id: 3,
            name: "Greg H",
            title: "Backend Engineer",
            img: "Greg.jpg",
            icon: "twitter.png",
            desc: "Chris was a pleasure to work with in my time with him at flatiron. Not only was he professional, creative and hard working but he was also a great personality to interact with on a daily basis. I enjoyed working with Chris everyday.",
        },
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1> Testimonials </h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card" }>
                        <div className="top">
                            <img src="right-arrow.png" alt="right-arrow" className="left" />
                            <img src={d.img} alt="me" className="user" />
                            <img src={d.icon} alt="youtube" className="right" />
                        </div>
                        <div className="center"> {d.desc} </div>
                        <div className="bottom">
                            <h3> {d.name} </h3>
                            <h4>  {d.title} </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
