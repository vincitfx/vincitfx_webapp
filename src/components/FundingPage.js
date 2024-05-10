import Header from "./Header";
import Footer from "./Footer";
import '../css/FundingPage.css'
import fundingimg from '../images/fundingimg.png'
import fundingdepositimg from '../images/fundingdepositimg.svg'
import fundingwithdrawalimg from '../images/fundingwithdrawalimg.svg'
import { useNavigate } from 'react-router-dom';

function FundingPage()
{

    const navigate = useNavigate()

    const goToSignUpPage = ()=>{
        navigate('/signup');
    }

    const showDepositpart = ()=> {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        r.style.setProperty('--showDepositDiv', 'block');
        r.style.setProperty('--showWithdrawalDiv', 'none');
        r.style.setProperty('--backgroundDepositColor', '#E6E6E6');
        r.style.setProperty('--backgroundWithdrawalColor', 'white');
    }

    const showWithdrawalpart = ()=> {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        r.style.setProperty('--showDepositDiv', 'none');
        r.style.setProperty('--showWithdrawalDiv', 'block');
        r.style.setProperty('--backgroundDepositColor', 'white');
        r.style.setProperty('--backgroundWithdrawalColor', '#E6E6E6');
    }

    return(
        <div>
            <Header></Header>
            <div className="funding-main-div">
                <img src={fundingimg} className='aboutusimg-2' alt="aboutusimg"></img>
                <p className="funding-title">Deposits & Withdrawals</p>
                <p className="funding-subtitle">Our Payment Methods</p>
                <button className="deposit-div" onClick={() => showDepositpart()}>
                    <p className="deposit-text">Deposits</p>
                </button>
                <button className="with-div" onClick={()=> showWithdrawalpart()}>
                    <p className="with-text">Withdrawals</p>
                </button>
                <div className="funding-deposit-div">
                    <img src={fundingdepositimg} className='fundingdepositimg' alt="fundingdepositimg"></img>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-1'>Make a deposit</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-2'>Make a deposit</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-3'>Make a deposit</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-4'>Make a deposit</button>
                </div>
                <div className="funding-with-div">
                    <img src={fundingwithdrawalimg} className='fundingwithdrawalimg' alt="fundingwithdrawalimg"></img>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-5'>Withdraw</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-6'>Withdraw</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-7'>Withdraw</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-8'>Withdraw</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default FundingPage