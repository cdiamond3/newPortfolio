import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useState, useEffect } from "react"
import { webPortfolio, charityPortfolio, coloringBook, rdPortfolio, mutate } from "../../data"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "Phase 1: The Start",

        },
        {
            id: "web",
            title: "Phase 2: Immature Pets Collection"
        },
        {
            id: "charity",
            title: "Phase 3: Charity Drive"
        },
        {
            id: "design",
            title: "Phase 4: Childrens Coloring Book"
        },
        {
            id: "Baby Bottle Bots",
            title: "Phase 5: BABY BOTTLE BOT MUTATIONS"
        },
    ]


    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(rdPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "charity":
                setData(charityPortfolio)
                break;
            case "design":
                setData(coloringBook)
                break;
            case "Baby Bottle Bots":
                setData(mutate)
                break;
            default:
                setData(rdPortfolio)
        }

    }, [selected])


    return (
        <div className="portfolio" id="portfolio" >
            <h1> ROAD MAP </h1>
            <h3> (Hover Over Tiles For Details) </h3>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        id={item.id}
                        setSelected={setSelected} />
                ))}
            </ul>
            <div className="container" >
                {data.map(d => (
                    <div className="item2">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
