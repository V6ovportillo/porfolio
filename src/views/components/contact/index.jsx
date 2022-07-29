import './index.scss';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h2>Contact</h2>
            <form>
                <input type="text" id='email' placeholder='Email'/>
                <textarea name="" id="message" placeholder='Message'></textarea>
                <button type='submit' id='buttonSend'>Send</button>
            </form>
        </div>
    )
};

export default Contact;