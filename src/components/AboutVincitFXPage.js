import Header from "./Header";
import Footer from "./Footer";
import '../css/AboutVincitFXPage.css'
import aboutusimg from '../images/aboutusimg.png'

function AboutVincitFXPage()
{
    return(
        <div>
            <Header></Header>
            <div className="main-div">
                <img src={aboutusimg} className='aboutusimg' alt="aboutusimg"></img>
                <p className="title-text">About Us</p>
                <p className="about-text-1">VincitFX is an online trading brokerage firm founded in 2020 by industry leading experts with<br></br>
                    a shared commitment to share their expertise and improve the world of financial markets.<br></br>
                    Over the past three years we have grown to a group of companies serving more than 8,000<br></br>
                    clients in 42+ countries.
                </p>
                <p className="about-text-2">
                Our goal is to become the number one brokerage firm by user experience and our clients<br></br>
                satisfaction. Welcome to the VincitFX family!
                </p>
                <p className="about-text-3">Why Choose VincitFX?</p>
                <div className="about-div">
                    <div className="about-div-1">
                        <p className="number-text">01</p>
                        <p className="about-subtitle">Flexible account types.</p>
                        <p className="about-desc">Choose between Standard, No Swap<br />
                        account, Zero spread account or a Pro<br />
                        trading account.</p>
                    </div>
                    <div className="about-div-2">
                        <p className="number-text">02</p>
                        <p className="about-subtitle">Licensed and Regulated.</p>
                        <p className="about-desc">It is very important for us to work within a<br />
                        clear framework of the law and provide <br />
                        theprotection of the regulator to our<br />
                        clients.</p>
                    </div>
                    <div className="about-div-3">
                        <p className="number-text">03</p>
                        <p className="about-subtitle">Easy onboarding process.</p>
                        <p className="about-desc">We know how to make your onboarding<br />
                        user friendly and with minimum<br /> 
                        paperwork, but to comply with<br /> 
                        regulations at the same time.</p>
                    </div>
                    <div className="about-div-4">
                        <p className="number-text">04</p>
                        <p className="about-subtitle">Ultra-fast execution.</p>
                        <p className="about-desc">Most of your trades are filled in less than<br /> 
                        20 ms of time. Wow!</p>
                    </div>
                    <div className="about-div-5">
                        <p className="number-text">05</p>
                        <p className="about-subtitle">Best trading platform.</p>
                        <p className="about-desc">For our beloved clients we provide the<br /> 
                        world leading trading platform -<br /> 
                        MetaTrader 5.</p>
                    </div>
                    <div className="about-div-6">
                        <p className="number-text">06</p>
                        <p className="about-subtitle">Variety of products.</p>
                        <p className="about-desc">We provide you with a range of 270<br /> 
                        trading instruments amongst 5 asset<br /> 
                        classes.</p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>

    )
}

export default AboutVincitFXPage