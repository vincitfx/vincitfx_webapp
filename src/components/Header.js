import logo from '../logo.png'
import { useNavigate } from 'react-router-dom'
import { useMetaTags } from 'react-metatags-hook';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'

function Header() {

    useMetaTags(
        {
          charset: 'utf8',
          lang: 'en',
          metas: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          ]
        }
      );

    const navigate = useNavigate()

    const goToSignUpPage = ()=>{
        navigate('/signup');
    }

    const goToLoginPage = ()=>{
        navigate('/login');
    }

    const goToFAQsPage = ()=>{
        navigate('/faqs');
    }

    const goToAboutPage = ()=>{
        navigate('/about');
    }

    const goToContactUsPage = ()=>{
        navigate('/contactus');
    }

    const goToAccountTypesPage = ()=>{
        navigate('/accounttypes');
    }

    const goToFundingPage = ()=>{
        navigate('/funding');
    }

    const goToCreditBonusPage = ()=>{
        navigate('/creditbonus');
    }

    const goToHomePage = ()=>{
        navigate('/');
    }

    return(
        <div className='main-container'>
                <Navbar collapseOnSelect  expand="lg" className="bg-body-tertiary">
                    <img src={logo} className="logo-icon" alt="logo" onClick={() => goToHomePage()} />
                    <p className='logo-name' onClick={() => goToHomePage()}>VincitFX</p>
                    <button onClick={ () => goToSignUpPage()} className='signup-btn'>SIGN UP</button>
                    <button onClick={ () => goToLoginPage()} className='login-btn'>LOGIN</button>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Company" className='menu-items' id="collapsible-nav-dropdown" style={{marginRight:"80px",fontWeight:"bold", fontSize:"18px"}}>
                                <NavDropdown.Item className='menu-items' onClick={() => goToAboutPage()} style={{fontWeight:"bold", fontSize:"18px"}}>
                                    About VincitFX
                                </NavDropdown.Item>
                                <NavDropdown.Item className='menu-items' onClick={() => goToFAQsPage()} style={{fontWeight:"bold", fontSize:"18px"}}>
                                    FAQs
                                </NavDropdown.Item>
                                <NavDropdown.Item className='menu-items' onClick={() => goToContactUsPage()} style={{fontWeight:"bold", fontSize:"18px"}}>
                                    Contact Us
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Trading" className='menu-items' id="collapsible-nav-dropdown" style={{marginRight:"80px",fontWeight:"bold", fontSize:"18px"}}>
                                <NavDropdown.Item className='menu-items' onClick={() => goToAccountTypesPage()} style={{fontWeight:"bold", fontSize:"18px"}}>
                                    Account Types
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='menu-items' onClick={() => goToFundingPage()} style={{marginRight:"80px",fontWeight:"bold", fontSize:"18px"}}>Funding</Nav.Link>

                            <NavDropdown title="Promotions" className='menu-items' id="collapsible-nav-dropdown" style={{marginRight:"80px",fontWeight:"bold", fontSize:"18px"}}>
                                <NavDropdown.Item className='menu-items' onClick={() => goToCreditBonusPage()} style={{fontWeight:"bold", fontSize:"18px"}}>
                                    100% Credit Bonus
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>

)
}

    

export default Header