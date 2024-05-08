import Header from "./Header";
import Footer from "./Footer";
import '../css/ContactUsPage.css';
import contactbgimg from '../images/contactbgimg.png'; 
import contactemailimg from '../images/contactemailimg.svg';
import contactphoneimg from '../images/contactphoneimg.svg';
import contactchatimg from '../images/contactchatimg.svg';



function ContactUsPage()
{
    return(
        <div>
            <Header></Header>
            <div className="contact-main-div">
                <img src={contactbgimg} className='contactbgimg' alt="contactbgimg"></img>
                <p className="contact-title">Contact Us</p>
                <p className="contact-line">Get in touch with us through the suitable for you method below</p>
                <img src={contactemailimg} className='contactemailimg' alt="contactemailimg"></img>
                <img src={contactphoneimg} className='contactphoneimg' alt="contactphoneimg"></img>
                <img src={contactchatimg} className='contactchatimg' alt="contactchatimg"></img>
                <p className="contact-email-title">Email</p>
                <p className="contact-email">vincitfx@gmail.com</p>
                <p className="contact-call-title">Call</p>
                <p className="contact-call">+91-8982117469</p>
                <p className="contact-chat">Live Chat</p>
                <p className="contact-chat-support">Start Live Chat</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ContactUsPage