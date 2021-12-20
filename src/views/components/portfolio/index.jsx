import PortfolioList from '../portfolioList';
import { useEffect, useState } from 'react';
import './index.scss';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../../data'

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const itemsList = [
        { id: "featured", title: "Featured" },
        { id: "web", title: "Web App" },
        { id: "mobile", title: "Mobile App" },
        { id: "design", title: "Design" },
        { id: "content", title: "Content" },
    ]
    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;

            default:
                setData(featuredPortfolio);
                break;
        }
    }, [selected]);

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {itemsList.map((item) => (
                    <PortfolioList key={item.id} item={item} selected={selected} setSelected={setSelected} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id}>
                        <img src={d.img} alt={d.title} />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Portfolio;