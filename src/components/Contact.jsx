import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])
    return (
        <div id='contact' className="contact-page">
            <div className="contact-heading">
                <p>Get in touch with me,</p>
                <h1 data-aos="zoom-in">Contact</h1>
            </div>
            <div className="details">
                <form>
                    <label data-aos="zoom-in">
                        <h1>Name:</h1>
                        <input type="text" placeholder="Enter your name" className="name-field" />
                    </label>
                    <label data-aos="zoom-in">
                        <h1>Email:</h1>
                        <input type="text" className="email-field" placeholder="Enter your email"/>
                    </label>
                    <label data-aos="zoom-in">
                        <h1>Message:</h1>
                        <input type="text" className="message-field" placeholder="Enter your message"/>
                    </label>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
 
export default Contact;