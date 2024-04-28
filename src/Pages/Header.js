import logo from './logo.png'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    const goToSignUpPage = ()=>{
        navigate('signup');
    }
    return(
        <div className='main-container'>
                <img src={logo} className="logo-icon" alt="logo" />
                <p className='logo-name'>VincitFX</p>
                <button onClick={ () => goToSignUpPage()} className='signup-btn'>SIGN UP</button>
                <button className='login-btn'>LOGIN</button>
        </div>

)
}

    

export default Header