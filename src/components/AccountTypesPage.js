import Header from "./Header";
import Footer from "./Footer";
import '../css/AccountTypesPage.css';
import accountbgimg from '../images/accountbgimg.png';
import accounttypesimg from '../images/accounttypesimg.svg';
import leftarrowimg from '../images/leftarrowimg.svg';
import { useNavigate } from 'react-router-dom';

function AccountTypesPage()
{
    const navigate = useNavigate()

    const goToSignUpPage = ()=>{
        navigate('/signup');
    }

    const moveAccountTypesImgRight = ()=> {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        var xCordinate = rs.getPropertyValue('--xCordinate');
        var xCordinateInt = parseInt(xCordinate.substring(0,4));
        if(xCordinateInt > -408)
        {
          xCordinateInt = xCordinateInt - 207;
          r.style.setProperty('--xCordinate', xCordinateInt + 'px');
        }
        else{
          r.style.setProperty('--xCordinate', -408 + 'px');
        }
      }

      const moveAccountTypesImgLeft = () => {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        var xCordinate = rs.getPropertyValue('--xCordinate');
        var xCordinateInt = parseInt(xCordinate.substring(0,4));
        if(xCordinateInt < 6)
        {
          xCordinateInt = xCordinateInt + 207;
          r.style.setProperty('--xCordinate', xCordinateInt + 'px');
        }
        else 
        {
          r.style.setProperty('--xCordinate', 6 + 'px');
        }
      }
    return(
        <div>
            <Header></Header>
            <div className="account-main-div">
                <img src={accountbgimg} className='accountbgimg' alt="accountbgimg"></img>
                <p className="account-title">Account Types</p>
                <p className="account-text-1">
                    VincitFX provides trading account types for both novice and professional traders.Choose your trading account and start trading online today!
                </p>
                <p className="accounttypes-2">Account Types</p>
                <img src={accounttypesimg} className='accounttypesimg-2' alt="accounttypes-image"></img>
                <img src={leftarrowimg} className='leftarrowimg-2' alt="leftarrowimg" onClick={() => moveAccountTypesImgLeft()}></img>
                <img src={leftarrowimg} className='rightarrowimg-2' alt="rightarrowimg" onClick={() =>moveAccountTypesImgRight() }></img>
                <div className="acount-div">
                    <p className="account-text-3">Ready to start?</p>
                    <p className="account-text-4">Open your trading account today!</p>
                    <button onClick={ () => goToSignUpPage()} className='account-btn-1'>Open Live Account</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AccountTypesPage