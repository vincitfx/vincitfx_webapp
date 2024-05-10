import '../css/SignUpPage.css';
import logoimg from '../logo.png';
import signupstepsimg from '../images/signupstepsimg.svg';
import downarrowimg from '../images/downarrowimg.svg';
import backarrowimgblack from '../images/backarrowimgblack.svg';
import backarrowimgwhite from '../images/backarrowimgwhite.svg';
import { useNavigate } from "react-router-dom";

function SignUpPage()
{

    const expandOrCollapse = ()=> {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        var arrowFlip = rs.getPropertyValue('--arrowFlip');
        if(arrowFlip == -1)
        {
            r.style.setProperty('--increaseDivHeight', '700px');
            r.style.setProperty('--showImg', 'block');
            r.style.setProperty('--arrowFlip', 1);
        }
        else
        {
            r.style.setProperty('--increaseDivHeight', '300px');
            r.style.setProperty('--showImg', 'none');
            r.style.setProperty('--arrowFlip', -1);  
        }
    }

    const navigate = useNavigate()
    const goToHomePage = ()=>{
        navigate('/');
    }

    const goToLoginPage = ()=>{
        navigate('/login');
    }

    return(
        
        <div className="signup-main-div">
            <div className='signup-div-1'>
                <img src={backarrowimgblack} className='backarrowimgblack' alt="image" onClick={()=> goToHomePage()}></img>
                <p className='signup-text-1'>
                    Register now and Trade<br />
                     <mark style={{color: '#FF914D', backgroundColor : "white", backgroundColor:'rgba(0, 0, 0, 0)' }}>with VincitFX</mark>
                </p>
                <input id='textarea-1' className="signup-textarea" maxLength={50} placeholder="First Name *" ></input>
                <input id='textarea-2' className="signup-textarea" maxLength={50} placeholder="Last Name *" ></input>
                <input id='textarea-3' className="signup-textarea" maxLength={50} placeholder="Email *" ></input>
                <input id='textarea-4' className="signup-textarea" maxLength={50} placeholder="Phone Number *" ></input>
                <input id='textarea-5' className="signup-textarea" maxLength={50} placeholder="Password *" ></input>
                <input id='textarea-6' className="signup-textarea" maxLength={50} placeholder="Confirm Password *" ></input>
                <button className='signup-btn-1'>Sign up</button>
                <input className='signup-radio' type='checkbox' size={10}></input>
                <p className='singup-aggrement'>
                    By proceeding, I agree to the <a href='' target='_blank' style={{textDecoration:'none', fontWeight:'bold', color:'#070417' }}>Privacy policy</a>,  
                    <a href='' target='_blank' style={{textDecoration:'none', fontWeight:'bold', color:'#070417' }}> Client<br/>
                    Agreement</a> and <a href='' target='_blank' style={{textDecoration:'none', fontWeight:'bold', color:'#070417' }}>Terms & Conditions</a> and consent<br/>
                    to BelleoFX contacting me regarding available <br/>
                    services and for marketing purposes.<br/>
                </p>
                <p className='signup-text-2'>Already have an account?</p>
                <a className='signup-text-3' onClick={() => goToLoginPage()}>Login</a>
            </div>
            <div className='signup-div-2'>
                <img src={backarrowimgwhite} className='backarrowimgwhite' alt="image" onClick={()=> goToHomePage()}></img>
                <img src={logoimg} className='logo-icon-singup' alt="image"></img>
                <p className="app-name-signup">VincitFX</p>
                <p className='signup-text-4'>Start trading today<br/>
                    in 3 easy steps!
                </p>
                <img src={signupstepsimg} className='signupstepsimg' alt="image"></img>
                <img src={downarrowimg} className='downarrowimg' onClick={() => expandOrCollapse()} alt="image"></img>
            </div>
        </div>
    )
}

export default SignUpPage