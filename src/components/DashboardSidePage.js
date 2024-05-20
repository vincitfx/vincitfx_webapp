import DashboardHeaderPage from "./DashboardHeaderPage"; 
import '../css/DashboardSidePage.css'
import accounticonimg from '../images/accounticonimg.svg'
import depositiconimg from '../images/depositiconimg.svg'
import withdrawiconimg from '../images/withdrawiconimg.svg'
import transactioniconimg from '../images/transactioniconimg.svg'
import portfolioiconimg from '../images/portfolioiconimg.svg'
import { useNavigate } from 'react-router-dom';

function DashboardSidePage() {
    const navigate = useNavigate()

    const goToDashboardPage = ()=>{
        navigate('/dashboard');
    }

    const goToDepositPage = ()=>{
        navigate('/deposit');
    }

    const goToWithdrawPage = ()=>{
        navigate('/withdraw');
    }

    const goToTransactionHistoryPage = ()=>{
        navigate('/transactionhistory');
    }

    const goToPortfolioManagementPage = ()=>{
        navigate('/portfoliomanagement');
    }
    
    return(
        <div className="side-main-div">
            <button className="side-account" onClick={() => goToDashboardPage()}>
                <div className="btn-div">
                    <img src={accounticonimg} className="iconimg" alt="logo" />
                    <p className="side-text">My accounts</p>
                </div>
            </button>
            <button className="side-deposit" onClick={() => goToDepositPage()}>
               <div className="btn-div">
                    <img src={depositiconimg} className="iconimg" alt="logo" />
                    <p className="side-text">Deposit</p>
                </div>
            </button>
            <button className="side-withdraw" onClick={() => goToWithdrawPage()}>
                <div className="btn-div">
                    <img src={withdrawiconimg} className="iconimg" alt="logo" />
                    <p className="side-text">Withdraw</p>
                </div>
            </button>
            <button className="side-transaction" onClick={() => goToTransactionHistoryPage()}>
                <div className="btn-div">
                    <img src={transactioniconimg} className="iconimg" alt="logo" />
                    <p className="side-text">Transaction history</p>
                </div>
            </button>
            <button className="side-portfolio" onClick={() => goToPortfolioManagementPage()}>
                <div className="btn-div">
                    <img src={portfolioiconimg} className="iconimg" alt="logo" />
                    <p className="side-text">Portfolio management</p>
                </div>
            </button>
        </div>
    )
}

export default DashboardSidePage