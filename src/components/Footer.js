import '../css/Footer.css'
import logo from '../logo.png'
import { useMetaTags } from 'react-metatags-hook';
import phonenumber from '../images/phonenumber.svg'
import email from '../images/email.svg'
import address from '../images/address.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'

function Footer()
{
    useMetaTags(
        {
          charset: 'utf8',
          lang: 'en',
          metas: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          ]
        }
      );
    return(
        <div className='footer-container'>
            <img src={logo} className="logo-icon-2" alt="logo"  />
            <p className='logo-name-2'>VincitFX</p>
            <p className='contactus-text' >Contact Us</p>
            <img src={phonenumber} className='phonenumber-icon' alt="phone-number"></img>
            <p className='phonenumber-text'>+918982117469</p>
            <img src={email} className='email-icon' alt="email"></img>
            <p className='email-text'>vincitfx@gmail.com</p>
            <img src={address} className='address-icon' alt="address"></img>
            <p className='address-text'>Office 3501, Burj Al Salam, Trade<br />
             Center First, Sheikh Zayed Road,<br/>
             Dubai, UAE</p>
            <p className='followus-text' >Follow Us</p>
            <img src={facebook} className='facebook-icon' alt="followus"></img>
            <img src={instagram} className='instagram-icon' alt="followus"></img>
            <img src={linkedin} className='linkedin-icon' alt="followus"></img>
            <a href='https://twitter.com/VincitFX' target='_blank'><img src={twitter} className='twitter-icon' alt="followus"></img></a>
            <img src={youtube} className='youtube-icon' alt="followus"></img>
            <p className='brand-desc'>
                VincitFX is a brand name of Vincit Markets (Mauritius), VincitFX (St. Vincent and The <br></br>
                Grenadines) and Vincit Markets - Rep.Office (UAE).<br></br><br></br>
                Vincit Markets (MU) incorporated in the Republic of Mauritius with registration number<br></br>
                186405 GBC. Company is regulated by the Financial Services Commission (FSC) of<br></br>
                Mauritius as an Investment Dealer (Broker), with a license number GB21027167.<br></br><br></br>
                VincitFX (SVG) is registered by Financial Services Authority (FSA) of St. Vincent & The <br></br>
                Grenadines as an International Business Company with registration number 2584 LLC <br></br>
                2022. <br></br>
                Vincit Markets - Rep. Office (UAE) is a branch of foreign company (Vincit Markets <br/>
                Mauritius), registered and regulated by DET with a license number 1074850. <br/><br/>
                VincitFX doesn't work with clients from OFAC sanctioned and FATF blacklisted countries.
            </p>
            <div className='policy-container'>
                <a href='' className='policy-1' id='pol-1'>Privacy Policy</a>        
                <a href='' className='policy-1' id='pol-2'>Cookie Policy</a>              
                <a href='' className='policy-1' id='pol-3'>AML & CTF Policy</a>                        
                <a href='' className='policy-1' id='pol-4'>Risk Warning</a>                
                <a href='' className='policy-1' id='pol-5'>Terms of Use</a>
                <a href='' className='policy-1' id='pol-6'>Complaints Handling Procedure</a>
                <a href='' className='policy-1' id='pol-7'>Deposit and Withdrawal Policy</a>
                <a href='' className='policy-1' id='pol-8'>© 2020-2024 VincitFX | All Rights Reserved</a>
            </div>
        </div>

    )
}

export default Footer