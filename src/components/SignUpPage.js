import '../css/SignUpPage.css';
import logoimg from '../logo.png';
import signupstepsimg from '../images/signupstepsimg.svg';
import downarrowimg from '../images/downarrowimg.svg';
import backarrowimgblack from '../images/backarrowimgblack.svg';
import backarrowimgwhite from '../images/backarrowimgwhite.svg';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AllAPIs from './AllAPIs';

function SignUpPage()
{

    const expandOrCollapse = ()=> {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        var arrowFlip = rs.getPropertyValue('--arrowFlip');
        if(arrowFlip == -1)
        {
            r.style.setProperty('--increaseDivHeight', '700px');
            r.style.setProperty('--showImg', 'block');
            r.style.setProperty('--arrowFlip', 1);
        }
        else
        {
            r.style.setProperty('--increaseDivHeight', '300px');
            r.style.setProperty('--showImg', 'none');
            r.style.setProperty('--arrowFlip', -1);  
        }
    }

    const navigate = useNavigate()
    const goToHomePage = ()=>{
        navigate('/');
    }

    const goToLoginPage = ()=>{
        navigate('/login');
    }

    const [userData, setuserData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber : '',
        password : ''
      });

    const [confirmPwd, setConfirmPwd] = useState('');

    const [validationMsg, setValidationMsg] = useState('');
    const [isvalid, setIsValid] = useState(true)

    const onFirstNameChange = (event) => {
        const inputFirstName = event.target.value;
        const firstNameRegex = new RegExp(/^[A-Za-z\s]*$/);
        if (firstNameRegex.test(inputFirstName)) {
          setIsValid(true);
          setuserData({...userData, firstName : inputFirstName});
        }
        else
        {
            setIsValid(false);
            setValidationMsg("Please enter a valid first name")
        }
    }

    const onLastNameChange = (event) => {
        const inputLastName = event.target.value;
        const lastNameRegex = new RegExp(/^[A-Za-z\s]*$/);
        if (lastNameRegex.test(inputLastName)) {
            setIsValid(true);
            setuserData({...userData, lastName : inputLastName});
          }else{
            setIsValid(false);
            setValidationMsg("Please enter a valid last name")
          }
    }

    const onEmailChange = (event) => {
        const inputEmail = event.target.value;
        const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/);
        if (emailRegex.test(inputEmail)) {
            setIsValid(true);
            setuserData({...userData, email : inputEmail});
          }else{
            setIsValid(false);
            setuserData({...userData, email : inputEmail});
            setValidationMsg("Please enter a valid email address")
          }
        setuserData({...userData, email : event.target.value});
    }

    const onPhoneNumerChange = (event) => {
        const inputPhoneNumber = event.target.value;
        const phoneNumberRegex = new RegExp(/^[0-9\b\+\-\(\)]*$/);
        if (phoneNumberRegex.test(inputPhoneNumber)) {
            setIsValid(true);
            setuserData({...userData, phoneNumber : inputPhoneNumber});
          }else{
            setIsValid(false);
            setValidationMsg("Please enter a valid phone number with country code (e.g., +1234567890)")
          }
    }

    const onPasswordChange = (event) => {
        setuserData({...userData, password : event.target.value});
    }

    const onConfirmPasswordChange = (event) => {
        setConfirmPwd(event.target.value);
    }

    const [isChecked, setIsChecked] = useState(false);

    const onCheckboxChange = (event) => {
        setIsChecked(!isChecked);
    }

    const submit = async () => {
        if(userData.fisrtName == '')
        {
            setValidationMsg("First name cannot be black");
            setIsValid(false);
            return;
        }
        if(userData.lastName == '')
        {
            setValidationMsg("Last name cannot be black");
            setIsValid(false);
            return;
        }
        if(userData.email == '')
        {
            setValidationMsg("Email cannot be black");
            setIsValid(false);
            return;
        }
        if(userData.phoneNumber == '')
        {
            setValidationMsg("Phone number cannot be black");
            setIsValid(false);
            return;
        }
        if(userData.password == '')
        {
            setValidationMsg("Password cannot be black");
            setIsValid(false);
            return;
        }
        if(userData.password != confirmPwd)
        {
            setValidationMsg("Password and confirm password do not match");
            setIsValid(false);
            return;
        }
        if(!isChecked)
        {
            setValidationMsg("Please accept the terms and conditions");
            setIsValid(false);
            return;
        }
        else
        {
            setIsValid(true);
        }

        const AllAPIsIns = new AllAPIs();
        var clientGuid = "";
        var doesEmailExist = false;
        try {
            var response = await AllAPIsIns.checkEmailExist(userData.email).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                return response.json();
            }).then(data => {
                doesEmailExist = data.DoesEmailExist

            });
        } catch(error) {
            console.error('Fetch error:', error);
        }

        if(!doesEmailExist)
        {
            try {
                var response = await AllAPIsIns.signUp(userData).then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                    }
                  return response.json()
                }).then(data => {
                  console.log(data)
                  localStorage.setItem("clientguid", data.clientguid)
                  localStorage.setItem("createddate", data.createddate)
                  localStorage.setItem("email", data.email)
                  localStorage.setItem("firstname", data.firstname)
                  localStorage.setItem("id", data.id)
                  localStorage.setItem("lastname", data.lastname)
                  localStorage.setItem("phonenumber", data.phonenumber)
                  navigate(`/dashboard`)
                });
              } catch (error) {
                console.error('Fetch error:', error);
              }
        } 
        else
        {
            setValidationMsg("Email already exists");
            setIsValid(false);
            return;
        }   


        
    }

    return(
        
        <div className="signup-main-div">
            <div className='signup-div-1'>
                <img src={backarrowimgblack} className='backarrowimgblack' style={{cursor:"pointer"}} alt="image" onClick={()=> goToHomePage()}></img>
                <p className='signup-text-1'>
                    Register now and Trade<br />
                     <mark style={{color: '#FF914D', backgroundColor : "white", backgroundColor:'rgba(0, 0, 0, 0)' }}>with VincitFX</mark>
                </p>
                <input id='textarea-1' className="signup-textarea" maxLength={50} value={userData.fisrtName} onChange={onFirstNameChange} placeholder="First Name *" ></input>
                <input id='textarea-2' className="signup-textarea" maxLength={50} value={userData.lastName} onChange={onLastNameChange} placeholder="Last Name *" ></input>
                <input id='textarea-3' className="signup-textarea" maxLength={50} value={userData.email} onChange={onEmailChange} placeholder="Email *" ></input>
                <input id='textarea-4' className="signup-textarea" maxLength={50} value={userData.phoneNumber} onChange={onPhoneNumerChange} placeholder="Phone Number *" ></input>
                <input id='textarea-5' className="signup-textarea" type='password' maxLength={50} value={userData.password} onChange={onPasswordChange} placeholder="Password *" ></input>
                <input id='textarea-6' className="signup-textarea" type='password' maxLength={50} value={confirmPwd} onChange={onConfirmPasswordChange} placeholder="Confirm Password *" ></input>
                {!isvalid ?<p className='validmsg'>{validationMsg}</p> : <p></p>}
                <button className='signup-btn-1' onClick={submit}>Sign up</button>
                <input className='signup-radio' type='checkbox' checked={isChecked} onChange={onCheckboxChange} size={10}></input>
                <p className='singup-aggrement'>
                    By proceeding, I agree to the <a href='' target='_blank' style={{textDecoration:'none', fontWeight:'bold', color:'#070417' }}>Privacy policy</a>,  
                    <a href='' target='_blank' style={{textDecoration:'none', fontWeight:'bold', color:'#070417' }}> Client<br/>
                    Agreement</a> and <a href='' target='_blank' style={{textDecoration:'none', fontWeight:'bold', color:'#070417' }}>Terms & Conditions</a> and consent<br/>
                    to VincitFX contacting me regarding available <br/>
                    services and for marketing purposes.<br/>
                </p>
                <p className='signup-text-2'>Already have an account?</p>
                <a style={{cursor:"pointer"}} className='signup-text-3' onClick={() => goToLoginPage()}>Login</a>
            </div>
            <div className='signup-div-2'>
                <img src={backarrowimgwhite} className='backarrowimgwhite' alt="image" onClick={()=> goToHomePage()}></img>
                <img src={logoimg} className='logo-icon-singup' alt="image"></img>
                <p className="app-name-signup">VincitFX</p>
                <p className='signup-text-4'>Start trading today<br/>
                    in 3 easy steps!
                </p>
                <img src={signupstepsimg} className='signupstepsimg' alt="image"></img>
                <img src={downarrowimg} className='downarrowimg' onClick={() => expandOrCollapse()} alt="image"></img>
            </div>
        </div>
    )
}

export default SignUpPage