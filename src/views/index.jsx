import Topbar from "./components/topbar";
import Intro from "./components/intro";
import Reserve from "./components/reserve";
import Portfolio from "./components/portfolio";
import Works from "./components/works";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Menu from "./components/menu";
import React from 'react';
import './index.scss';

const App = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className='app'>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro />
                <Reserve />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contact />
            </div>
        </div>
    )
}
export default App;