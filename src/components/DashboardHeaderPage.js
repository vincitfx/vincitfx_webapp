import { useState } from 'react'
import logo from '../logo.png'
import { useNavigate } from 'react-router-dom'
import '../css/DashboardHeaderPage.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myprofileiconimg from '../images/myprofileiconimg.svg'

function DashboardHeaderPage({guid}) {

    const navigate = useNavigate()
    const goToDashboardPage = () => {
        navigate(`/dashboard/${guid}`)
    }
    return(
        <div className='dashboard-header-main-div'>
            <img src={logo} className="logo-icon" alt="logo" onClick={() => goToDashboardPage()} />
            <p className='logo-name' onClick={() => goToDashboardPage()}>VincitFX</p>
            <Navbar collapseOnSelect  expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Company" className='menu-items' id="collapsible-nav-dropdown" style={{marginRight:"80px",fontWeight:"bold", fontSize:"18px"}}>
                                <NavDropdown.Item className='menu-items' style={{fontWeight:"bold", fontSize:"18px"}}>
                                    <button className='myprofile-btn'>
                                        <div className='myprofile-div'>
                                            <img src={myprofileiconimg} className="myprofileicon" alt="iamge"  />
                                            <p className='myprofile-text'>My Profile</p>
                                        </div>
                                    </button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    )
}

export default DashboardHeaderPage