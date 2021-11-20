import React from 'react'

const LoginForm = () => {
    return (
      <div className="login-right-container">
        <form className="ui form">
          <h2 className="rightSideHeading">Welcome Employee</h2>
          <div className="field">
            <label className="inputLabel1 inputLabel">
              <span className="necessary">* </span>Enter your Registration
              Number
            </label>
            <input placeholder="Registration Number" />
          </div>
          <div className="field">
            <label className="inputLabel2 inputLabel">
              <span className="necessary">* </span>Enter your Password
            </label>
            <input placeholder="Password" />
          </div>
          <img className="captcha-img" src="images/captcha.jpg" alt="captcha" />
          <div className="field">
            <label className="inputLabel3 inputLabel">
              <span className="necessary">* </span>Enter captcha
            </label>
            <input placeholder="Captcha" />
          </div>
          <button type="submit" className="ui button submitButton">
            <a className="tagLink" href="/user">Submit</a>
          </button>
        </form>
      </div>
    );
}

export default LoginForm
