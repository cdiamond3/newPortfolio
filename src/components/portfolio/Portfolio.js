import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useState, useEffect } from "react"
import { myProjectsPortfolio, appPortfolio, professionalExperiencePortfolio, list } from "../../data"

export default function Portfolio() {

    const [selected, setSelected] = useState("professionalExperience")
    const [data, setData] = useState([])

    useEffect(() => {

        switch (selected) {
            case "professionalExperience":
                setData(professionalExperiencePortfolio)
                break;
            case "myProjects":
                setData(myProjectsPortfolio)
                break;
            case "blog":
                setData(appPortfolio)
                break;
            default:
                setData(professionalExperiencePortfolio)
        }
    }, [selected])


    return (
        <div className="portfolio" id="portfolio" >
            <h1> Portfolio </h1>
            <div className="miniNav">
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        id={item.id}
                        setSelected={setSelected} />
                ))}
            </ul>
            </div>
            <h1> Professional Experience </h1>
            <div className="container">
                {data.map(d => (
                    <div className={"card"} onClick={d.url ? () => window.open(d.url) : null}>
                        <div className="top">
                            <h4>  {d.title} </h4>
                            <br></br>
                            <div>
                            <img src={d.img} alt="me" className="user" />
                            </div>
                            <h3> {d.desc} </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


