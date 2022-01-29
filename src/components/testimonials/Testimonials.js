import "./testimonials.scss"
export default function Testimonials() {




    const data = [
        {
            id: 1,
            name: "King Infant",
            title: "DEVELOPER",
            img: "428.png",
            desc: "A wise Infant Hell Bent On Growing Up! Probably Eatng Cheese-Itz"

        },
        {
            id: 2,
            name: "Queen Infant",
            title: "ARTIST",
            img: "369.png",
            desc: "My IPAD Pen Is Taped Together! Probably Thinking Of Nothing",
            
        },
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1 className="titleTeam"> The Team </h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card" }>
                        <div className="top">
                            <img src={d.img} alt="me" className="user" />
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
