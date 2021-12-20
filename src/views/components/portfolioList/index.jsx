import './index.scss';

const PortfolioList = ({ item, selected, setSelected }) => {
    return (
        <li className={'portfolioList' + (selected === item.id ? ' active' : '')} id={item.id} onClick={() => setSelected(item.id)}>
           {item.title}
        </li>
    )
};

export default PortfolioList;