import React from 'react'
import LoginForm from './LoginForm'
import LoginImage from './LoginImage'
import LoginNav from './LoginNav'
import './Login.css'

const Login = () => {
    return (
      <div className="curvedSVG">
        <LoginNav />
        <div className="loginFlex">
          <LoginImage className="login-left-container" />
          <LoginForm className="login-right-container" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svgClass">
          <path
            fill="#FAE493"
            fill-opacity="0.3"
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,133.3C672,139,768,181,864,192C960,203,1056,181,1152,144C1248,107,1344,53,1392,26.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    );
}

export default Login
