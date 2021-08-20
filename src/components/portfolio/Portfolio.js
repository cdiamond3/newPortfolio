import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useState } from "react"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "Mobile App",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
    ]


    return (
        <div className="portfolio" id="portfolio" >
            <h1> Portfolio </h1>
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
                <div className="item">
                    <img
                        src="https://uploads-ssl.webflow.com/5e5d98432c687cb6c71f7894/5fc97743f847f22b0345d5ce_favicon_256.png"
                        alt=""
                    />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://uploads-ssl.webflow.com/5e5d98432c687cb6c71f7894/5fc97743f847f22b0345d5ce_favicon_256.png"
                        alt=""
                    />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://uploads-ssl.webflow.com/5e5d98432c687cb6c71f7894/5fc97743f847f22b0345d5ce_favicon_256.png"
                        alt=""
                    />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://uploads-ssl.webflow.com/5e5d98432c687cb6c71f7894/5fc97743f847f22b0345d5ce_favicon_256.png"
                        alt=""
                    />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://uploads-ssl.webflow.com/5e5d98432c687cb6c71f7894/5fc97743f847f22b0345d5ce_favicon_256.png"
                        alt=""
                    />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img
                        src="https://uploads-ssl.webflow.com/5e5d98432c687cb6c71f7894/5fc97743f847f22b0345d5ce_favicon_256.png"
                        alt=""
                    />
                    <h3>Crypto App</h3>
                </div>
            </div>
        </div>
    )
}
