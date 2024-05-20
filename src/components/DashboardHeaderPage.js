import { useState } from 'react'
import logo from '../logo.png'
import { useNavigate } from 'react-router-dom'
import '../css/DashboardHeaderPage.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myprofileiconimg from '../images/myprofileiconimg.svg'
import logouticonimg from '../images/logouticonimg.svg'
import menuiconimg from '../images/menuiconimg.svg'

function DashboardHeaderPage({guid}) {

    const navigate = useNavigate()
    const goToDashboardPage = () => {
        navigate(`/dashboard`)
    }

    const goToMyProfilePage = () => {
        navigate(`/myprofile`)
    }

    const goToHomePage = () => {
        localStorage.clear()
        navigate(`/`)
    }

    const showNavigationMenu = () => {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        var toogle = rs.getPropertyValue('--showNavigation');
        if(toogle === 'none'){
            r.style.setProperty('--showNavigation', 'block');
        }
        else{
            r.style.setProperty('--showNavigation', 'none');
        }
    }

    return(
        <div className='dashboard-header-main-div'>
            <img src={menuiconimg} className="menuicon" alt="logo" onClick={() => showNavigationMenu()} />
            <img src={logo} className="logo-icon" alt="logo" onClick={() => goToDashboardPage()} />
            <p className='logo-name' onClick={() => goToDashboardPage()}>VincitFX</p>
            <button className='myprofile-btn' onClick={() => goToMyProfilePage()}>
                <div className='settings-div'>
                    <img src={myprofileiconimg} className="myprofileicon" alt="iamge"  />
                    <p className='dash-p-1'>{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</p>
                    <p className='dash-p-2'>My Settings</p>
                </div>
            </button>
            <img src={logouticonimg} className="logouticon" alt="logo" onClick={() => goToHomePage()} />
        </div>
    )
}

export default DashboardHeaderPage