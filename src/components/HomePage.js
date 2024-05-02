import Header from "./Header"
import Footer from "./Footer"
import { useMetaTags } from 'react-metatags-hook';
import '../css/HomePage.css'
import androidappimg from '../images/androidappimg.png'
import applebutton from '../images/downloadapple.svg'
import googlebutton from '../images/downloadgoogle.svg'
import instrumentimg from '../images/instrumentimg.svg'
import tickimg from '../images/tickimg.svg'
import { useNavigate } from 'react-router-dom'

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
                  <img src={androidappimg} className='androidappimg' alt="app-image"></img>
                  <img src={applebutton} className='applebuton' alt="apple-button"></img>
                  <img src={googlebutton} className='googlebutton' alt="googleplay-button"></img>
              </div>
              <div className="instrument-div">
                <img src={instrumentimg} className='instrumentimg' alt="instrument-image"></img>
                <p className="text-3">Stay Mobile</p>
                <p className="text-4">Financial markets are easy. You can always quickly open<br />
                   or close your trading orders using your mobile phone.
                </p>
                <p className="text-5">Available on <mark style={{color: '#FF914D', backgroundColor : "#F5F5F5"}}>iOS</mark>and<mark style={{color: '#FF914D', backgroundColor : "#F5F5F5"}}>Android</mark></p>
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
            </div>
            <Footer className='Footer'></Footer>
        </div>

    )
}

export default HomePage