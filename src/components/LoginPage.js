import '../css/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import logoimg from '../logo.png';
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import backarrowimgblack from '../images/backarrowimgblack.svg';
import backarrowimgwhite from '../images/backarrowimgwhite.svg';

function LoginPage()
{

    const navigate = useNavigate()

    const goToSignUpPage = ()=>{
        navigate('/signup');
    }
    
    const goToHomePage = ()=>{
        navigate('/');
    }

    return(
        <div className="login-main-div">
            <div className="login-div-1">
                <img src={backarrowimgblack} className='backarrowimgblack' alt="image" onClick={()=> goToHomePage()}></img>
                <p className='login-text-1'>
                    Log in and<br />
                    <mark style={{color: '#FF914D', backgroundColor : "white", backgroundColor:'rgba(0, 0, 0, 0)' }}>Trade with VincitFX</mark>
                </p>
                <input id='login-textarea-1' className="login-textarea" maxLength={50} placeholder="Email" ></input>
                <input id='login-textarea-2' className="login-textarea" maxLength={50} placeholder="Password" ></input>
                <a className='login-p-1'>Forgot Password?</a>
                <button className='login-btn-1'>Login</button>
                <a className='login-p-2' onClick={() => goToSignUpPage()}>Sign up</a>
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

export default LoginPage