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
            <Route path="/dashboard/:clientGuid" element={<DashboardPage />} ></Route>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} ></Route>
          </Routes>
      </Router>
    </div>

  );
}

export default App;
