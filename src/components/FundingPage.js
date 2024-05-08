import Header from "./Header";
import Footer from "./Footer";
import '../css/FundingPage.css'
import aboutusimg from '../images/aboutusimg.png'
import fundingdepositimg from '../images/fundingdepositimg.svg'
import fundingwithdrawalimg from '../images/fundingwithdrawalimg.svg'
import { useNavigate } from 'react-router-dom';

function FundingPage()
{

    const navigate = useNavigate()

    const goToSignUpPage = ()=>{
        navigate('/signup');
    }
    return(
        <div>
            <Header></Header>
            <div className="funding-main-div">
                <img src={aboutusimg} className='aboutusimg-2' alt="aboutusimg"></img>
                <p className="funding-title">Deposits & Withdrawals</p>
                <p className="funding-subtitle">Our Payment Methods</p>
                <div className="funding-deposit-div">
                    <div className="deposit-div">
                        <p className="deposit-text">Deposits</p>
                    </div>
                    <img src={fundingdepositimg} className='fundingdepositimg' alt="fundingdepositimg"></img>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-1'>Make a deposit</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-2'>Make a deposit</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-3'>Make a deposit</button>
                    <button onClick={ () => goToSignUpPage()} className='funding-btn-4'>Make a deposit</button>
                </div>
                <div className="funding-with-div">
                    <div className="with-div">
                        <p className="with-text">Withdrawals</p>
                    </div>
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