import "./testimonials.scss"
export default function Testimonials() {




    const data = [
        {
            id: 1,
            name: "Caitlin",
            title: "Asset Manager",
            img: "cait.jpg",
            icon: "youtube.png",
            desc: "Commodo non ad adipisicing ea anim tempor ex et cupidatat reprehenderit irure nulla sunt."

        },
        {
            id: 2,
            name: "Chris",
            title: "CEO of Life",
            img: "me.jpg",
            icon: "linkedin.png",
            desc: "Reprehenderit aliqua esse enim ea.",
            featured: true
            
        },
        {
            id: 3,
            name: "DMFD",
            title: "Bad Ass Motha Fucka",
            img: "poppa.jpg",
            icon: "twitter.png",
            desc: "Commodo non ad adipisicing ea anim tempor ex et cupidatat reprehenderit irure nulla sunt.",
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
