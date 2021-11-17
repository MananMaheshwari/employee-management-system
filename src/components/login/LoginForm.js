import React from 'react'

const LoginForm = () => {
    return (
        <div className="login-right-container">
            <form class="ui form">
                <h2>Welcome Employee</h2>
                <div class="field">
                    <label><span className="necessary">* </span>Registration Number</label>
                    <input/>
                </div>
                <div class="field">
                    <label><span className="necessary">* </span>Password</label>
                    <input placeholder="Password"/>
                </div>
                <img className="captcha-img" src='images/captcha.jpg' alt="captcha"/>
                <div class="field">
                    <label><span className="necessary">* </span>Enter the captcha</label>
                    <input/>
                </div>
                <button type="submit" class="ui button">Submit</button>
            </form>
            
        </div>
    )
}

export default LoginForm
