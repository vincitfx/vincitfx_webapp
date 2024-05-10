import '../css/LoginPage.css'

function LoginPage()
{
    return(
        <div className="login-main-div">
            <div className="login-div-1">
                <p className='login-text-1'>
                    Log in and<br />
                    <mark style={{color: '#FF914D', backgroundColor : "white", backgroundColor:'rgba(0, 0, 0, 0)' }}>Trade with VincitFX</mark>
                </p>
                <input id='login-textarea-1' className="login-textarea" maxLength={50} placeholder="Email" ></input>
                <input id='login-textarea-2' className="login-textarea" maxLength={50} placeholder="Password" ></input>
                <a className='login-p-1'>Forgot Password?</a>
                <button className='login-btn-1'>Login</button>
            </div>
            <div className="login-div-2">

            </div>
        </div>
    )
}

export default LoginPage