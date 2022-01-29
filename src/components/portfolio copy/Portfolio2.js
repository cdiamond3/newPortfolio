import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio2.scss"
import { useState, useEffect } from "react"
import { webPortfolio, appPortfolio, mintPortfolio, socialsPortfolio } from "../../data"

export default function Portfolio2() {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "MINT NOW!",

        },
        // {
        //     id: "web",
        //     title: "Web App"
        // },
        // {
        //     id: "mobile",
        //     title: "Mobile App"
        // },
        {
            id: "socials",
            title: "Socials"
        },
    ]


    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(mintPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(appPortfolio)
                break;
            case "socials":
                setData(socialsPortfolio)
                break;
            default:
                setData(webPortfolio)
        }

    }, [selected])


    return (
        <div className="portfolio2" id="portfolio2" >
            <h1> Mint Now </h1>
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
                    <div className="item" onClick={() => window.open(d.url)}>
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
