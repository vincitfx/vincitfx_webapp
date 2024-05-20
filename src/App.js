import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import FundingPage from './components/FundingPage';
import AboutVincitFXPage from './components/AboutVincitFXPage';
import FAQsPage from './components/FAQsPage';
import ContactUsPage     from './components/ContactUsPage';
import AccountTypesPage from './components/AccountTypesPage';
import CreditBonusPage from './components/CreditBonusPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from './components/DashboardPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import MyProfilePage from './components/MyProfilePage';
import DepositPage from './components/DepositPage';
import WithdrawPage from './components/WithdrawPage';
import TransactionHistoryPage from './components/TransactionHistoryPage';
import PortfolioManagementPage from './components/PortfolioManagementPage';
function App() {
  return (
    <div>

      <Router basename="/vincitfx_webapp">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} ></Route>
            <Route path="/login" element={<LoginPage />} ></Route>
            <Route path="/about" element={<AboutVincitFXPage />} ></Route>
            <Route path="/faqs" element={<FAQsPage />} ></Route>
            <Route path="/contactus" element={<ContactUsPage />} ></Route>
            <Route path="/accounttypes" element={<AccountTypesPage />} ></Route>
            <Route path="/funding" element={<FundingPage />} ></Route>
            <Route path="/creditbonus" element={<CreditBonusPage />} ></Route>
            <Route path="/dashboard" element={<DashboardPage />} ></Route>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} ></Route>
            <Route path="/myprofile" element={<MyProfilePage />} ></Route>
            <Route path="/deposit" element={<DepositPage />} ></Route>
            <Route path="/withdraw" element={<WithdrawPage />} ></Route>
            <Route path="/transactionhistory" element={<TransactionHistoryPage />} ></Route>
            <Route path="/portfoliomanagement" element={<PortfolioManagementPage />} ></Route>
          </Routes>
      </Router>
    </div>

  );
}

export default App;
