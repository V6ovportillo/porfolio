import { useEffect, useRef } from 'react';
import { init } from 'ityped'
import './index.scss';

const Intro = () => {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true, 
            backSpeed: 100,
            backDelay: 2500,
            strings: ['Developer', 'Designer' ] 
        })
    },[]);
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="Img man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Venancio Portillo</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="Portfolio" />
                </a>
            </div>
        </div>
    )
};

export default Intro;