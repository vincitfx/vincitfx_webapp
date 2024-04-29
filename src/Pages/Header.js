import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
import { useMetaTags } from 'react-metatags-hook';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

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
        navigate('signup');
    }

    return(
        <div className='main-container'>
                <img src={logo} id="logo-icon-error" alt="logo" />
                <p id='logo-name-error'>VincitFX</p>
                <p id='error-message'>Please view our website in desktop for better experience ...</p>
                <Navbar collapseOnSelect  expand="lg" className="bg-body-tertiary">
                    <img src={logo} className="logo-icon" alt="logo" />
                    <p className='logo-name'>VincitFX</p>
                    <button onClick={ () => goToSignUpPage()} className='signup-btn'>SIGN UP</button>
                    <button className='login-btn'>LOGIN</button>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Company" id="collapsible-nav-dropdown" style={{marginRight:"40px",fontWeight:"bold", fontSize:"18px"}}>
                                <NavDropdown.Item href="#action/3.1" style={{fontWeight:"bold", fontSize:"18px"}}>
                                    About VincitFX
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" style={{fontWeight:"bold", fontSize:"18px"}}>
                                    FAQs
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" style={{fontWeight:"bold", fontSize:"18px"}}>
                                    Contact Us
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Trading" id="collapsible-nav-dropdown" style={{marginRight:"40px",fontWeight:"bold", fontSize:"18px"}}>
                                <NavDropdown.Item href="#action/3.1" style={{fontWeight:"bold", fontSize:"18px"}}>
                                    Account Types
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="vincitfx_webapp/signup" style={{marginRight:"40px",fontWeight:"bold", fontSize:"18px"}}>Funding</Nav.Link>

                            <NavDropdown title="Promotions" id="collapsible-nav-dropdown" style={{marginRight:"40px",fontWeight:"bold", fontSize:"18px"}}>
                                <NavDropdown.Item href="#action/3.1" style={{fontWeight:"bold", fontSize:"18px"}}>
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