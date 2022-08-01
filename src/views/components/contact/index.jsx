import './index.scss';
import { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="/assets/shake.svg" alt="contact" />
            </div>
            <div className="right">
            <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" id='email' placeholder='Email' />
                    <textarea name="" id="message" placeholder='Message'></textarea>
                    <button type='submit' id='buttonSend'>Send</button>
                    {message && <span>Thanks, I'll replay ASAP :)</span>}
                </form>
            </div>
        </div>
    )
};

export default Contact;