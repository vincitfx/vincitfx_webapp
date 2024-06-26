import React, { useState, useEffect  } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import { useMetaTags } from 'react-metatags-hook';
import '../css/HomePage.css';
import applebutton from '../images/downloadapple.svg';
import googlebutton from '../images/downloadgoogle.svg';
import instrumentimg from '../images/instrumentimg.png';
import tickimg from '../images/tickimg.svg';
import { useNavigate } from 'react-router-dom';
import accounttypesimg from '../images/accounttypesimg.svg' ;
import leftarrowimg from '../images/leftarrowimg.svg';
import tradingstepimg from '../images/tradingstepimg.svg';
import tradingstepimgmobile from '../images/tradingstepimgmobile.svg';
import callbackimg from '../images/callbackimg.svg';
import AllAPIs from './AllAPIs';
import appvideo from '../videos/appvideo.mp4'
import indicesvideo from '../videos/indicesvideo.mp4'


function HomePage()
{
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

      const [userData, setuserData] = useState({
        userName : '',
        phoneNumber : ''
      });

      const [isValid, setIsValid] = useState(true);
      const [validMsg, setvalidMsg] = useState('');

      const onNameChange = (event) => {
        const inputUserName = event.target.value;
        const userNameRegex = new RegExp(/^[A-Za-z\s]*$/);
        if (userNameRegex.test(inputUserName)) {
          setIsValid(true);
          setuserData({...userData, userName : inputUserName});
        }
        else {
          setvalidMsg("Please enter a valid name (only alphabets and spaces are allowed)")
          setIsValid(false);
        } 
      };

      const onPhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value;
        // Regular expression to validate phone number with country code
        const phoneNumberRegex = new RegExp(/^[0-9\b\+\-\(\)]*$/);
        
        if (phoneNumberRegex.test(inputPhoneNumber)) {
          setuserData({...userData, phoneNumber : inputPhoneNumber});
          setIsValid(true);
        } else {
          setvalidMsg("Please enter a valid phone number with country code (e.g., +1234567890)")
          setIsValid(false);
        }
        
      };

      const submit = async () => {

        const AllAPIsIns = new AllAPIs();
        try {
          var response = await AllAPIsIns.addCallBackUser(userData);
          if (response.ok) {
            var r = document.querySelector(':root');
            r.style.setProperty('--hideElement', 'none');
            r.style.setProperty('--showElement', 'block');
          } else {
            console.log('Error submitting form:', response.statusText);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
      
    return(
        <div className="homepage-container">
            <Header></Header>
            <div className="main-app-div">
              <div className="app-div">
                  <p className="text-1">Wherever & Whenever you want</p>
                  <p className="app-name">VincitFX Go!</p>
                  <p className="text-2">Start trading global markets from your hand<br />
                      held  devices. Our all-in-one trading app<br /> 
                      allows you to trade and test your strategies,<br />
                      deposit and withdraw funds and contact<br />
                      support without ever leaving your mobile<br /> 
                      device.
                  </p>
                  <video id='androidappvideoid' className='androidappimg' autoplay="autoplay" loop muted playsInline>
                    <source src={appvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                  {/*<img src={androidappimg} className='androidappimg' alt="app-image"></img> */}
                  <img src={applebutton} className='applebuton' alt="apple-button"></img>
                  <img src={googlebutton} className='googlebutton' alt="googleplay-button"></img>
              </div>
              <div className="instrument-div">
              <video className='instrumentimg' autoplay="autoplay" loop muted playsInline>
                    <source src={indicesvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={instrumentimg} className='instrumentimg' alt="instrument-image"></img> */}
                <p className="text-3">Stay Mobile</p>
                <p className="text-4">Financial markets are easy. You can always quickly open<br />
                   or close your trading orders using your mobile phone.
                </p>
                <p className="text-5">Available on <mark style={{color: '#FF914D', backgroundColor : "#E6E6E6"}}>iOS</mark>and<mark style={{color: '#FF914D', backgroundColor : "#E6E6E6"}}>Android</mark></p>
                <p className="text-6">Trade 1000+ instruments</p>
                <p className="text-7">Multi-asset classes</p>
                <p className="text-8">Variety of payment methods</p>
                <p className="text-9">Chat with support</p>
                <img src={tickimg} className='tickimg-1' alt="tick-image"></img>
                <img src={tickimg} className='tickimg-2' alt="tick-image"></img>
                <img src={tickimg} className='tickimg-3' alt="tick-image"></img>
                <img src={tickimg} className='tickimg-4' alt="tick-image"></img>
                <button onClick={ () => goToSignUpPage()} className='joinnow-btn'>Join Now</button>
              </div> 
              <div className="accounttypes-div">
                <p className="accounttypes-p">Account Types</p>
                <img src={accounttypesimg} className='accounttypesimg' alt="accounttypes-image"></img>
                <img src={leftarrowimg} className='leftarrowimg' alt="leftarrowimg" onClick={() => moveAccountTypesImgLeft()}></img>
                <img src={leftarrowimg} className='rightarrowimg' alt="rightarrowimg" onClick={() =>moveAccountTypesImgRight() }></img>
                <button onClick={ () => goToSignUpPage()} className='trading-btn-1'>Start Trading Now</button>
                <button onClick={ () => goToSignUpPage()} className='trading-btn-2'>Start Trading Now</button>
                <button onClick={ () => goToSignUpPage()} className='trading-btn-3'>Start Trading Now</button>
                <button onClick={ () => goToSignUpPage()} className='trading-btn-4'>Start Trading Now</button>
              </div>
              <div className="tradingstep-div">
                <img src={tradingstepimg} className='tradingstepimg' alt="tradingstepimg"></img>
                <img src={tradingstepimgmobile} className='tradingstepimgmobile' alt="tradingstepimgmobile"></img>
                <img src={callbackimg} className='callbackimg' alt="callbackimg"></img>
                <input className="textarea-name" maxLength={50} placeholder="Your name" value={userData.userName} onChange={onNameChange}></input>
                <input className="textarea-phone" maxLength={50} placeholder="Phone number" value={userData.phoneNumber} onChange={onPhoneNumberChange}></input>
                {!isValid ?
                  <span className='phonenumber-errormsg'>{validMsg}</span> : <span></span>
                }
                <button className='callback-btn' onClick={submit}>Call me please</button>
                <p className='text-12'>Processing your request.<br></br> Thanks for your cooperation.</p>
                <div className="callback-div">
                  <p className="text-10">Wanna Call?</p>
                  <p className="text-11">Request a call back!</p>
                  <p className='text-12'>Processing your request.<br></br> Thanks for your cooperation.</p>
                </div>
              </div>
            </div>

            <Footer></Footer>
        </div>

    )
}

export default HomePage