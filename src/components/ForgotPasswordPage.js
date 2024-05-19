import '../css/ForgotPasswordPage.css'
import { useNavigate } from 'react-router-dom';
import logoimg from '../logo.png';
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import backarrowimgblack from '../images/backarrowimgblack.svg';
import backarrowimgwhite from '../images/backarrowimgwhite.svg';
import { useState } from 'react';
import AllAPIs from './AllAPIs';
import Swal from 'sweetalert2'
 
function ForgotPasswordPage()
{

    const navigate = useNavigate()
    
    const goToHomePage = ()=>{
        navigate('/');
    }

    const goToLoginPage = ()=>{
        navigate('/login');
    }

    const [email, setEmail] = useState('');
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const submit = async () => {
        const AllAPIsIns = new AllAPIs();
        var isEmailSent = false;
        try {
            var response = await AllAPIsIns.sendRecoveryPassoword(email).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                return response.json();
            }).then(data => {
                isEmailSent = data.IsEmailSent
                if(isEmailSent){
                    Swal.fire("Password has been sent to your email.");
                }

            });
        } catch(error) {
            console.error('Fetch error:', error);
        }
    }

    return(
        <div className="login-main-div">
            <div className="login-div-1">
                <img src={backarrowimgblack} className='backarrowimgblack' alt="image" onClick={()=> goToHomePage()}></img>
                <p  className='forgot-text-1'>
                    Recover<br />
                    <mark style={{color: '#FF914D', backgroundColor : "white", backgroundColor:'rgba(0, 0, 0, 0)' }}>My password</mark>
                </p>
                <p className='forgot-recieve'>Please enter your email address below to receive instructions for resetting password.</p>
                <input id='forgot-textarea-1' className="forgot-textarea" value={email} onChange={onEmailChange} maxLength={50} placeholder="Email" ></input>
                <button className='forgot-btn-1' onClick={submit}>Reset password</button>
                <p className='forgot-p-2'>Know your password? <a onClick={() => goToLoginPage()} style={{color:"#FF914D", textDecoration: "none", cursor:"pointer"}}>Login</a> </p>
            </div>
            <div className="login-div-2">
                <img src={backarrowimgwhite} className='backarrowimgwhite' alt="image" onClick={()=> goToHomePage()}></img>
                <img src={logoimg} className='logo-icon-singup' alt="image"></img>
                <p className="app-name-signup">VincitFX</p>
                <p className='login-p-3'>Join us <mark style={{color: '#FF914D', backgroundColor : "white", backgroundColor:'rgba(0, 0, 0, 0)' }}>Today!</mark></p>
                <img src={facebook} id='facebook-icon' className='socialmedia-icon' alt="followus"></img>
                <img src={instagram} id='instagram-icon' className='socialmedia-icon' alt="followus"></img>
                <img src={linkedin} id='linkedin-icon' className='socialmedia-icon' alt="followus"></img>
                <a href='https://twitter.com/VincitFX' target='_blank'><img src={twitter} id='twitter-icon' className='socialmedia-icon'alt="followus"></img></a>
                <img src={youtube} id='youtube-icon' className='socialmedia-icon' alt="followus"></img>
            </div>
        </div>
    )
}

export default ForgotPasswordPage