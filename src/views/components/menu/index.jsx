import './index.scss';

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={!menuOpen ? 'menu' : 'menu menuOpen'} id='menu'>
            <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#reserva">Reserva</a></li>
                <li><a href='#historial'>Historial</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                 */}
            </ul>
        </div>
    )
};

export default Menu;