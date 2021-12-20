import './index.scss';
import { Person, Email } from '@material-ui/icons';

const Topbar = ({ menuOpen, setMenuOpen }) => {

    const handlerClick = () => setMenuOpen(!menuOpen);

    return (
        <div className={!menuOpen ? 'topbar' : 'topbar menuOpen'} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'> Venancio Portillo</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>098 49 87 56</span>
                    </div>
                    <div className="itemContainer">
                        <Email className='icon' />
                        <span>v_r_p_a@hotmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={handlerClick}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Topbar;