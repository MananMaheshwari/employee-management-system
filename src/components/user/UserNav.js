import React from 'react'
import LogoImage from "./LogoImage"
import { NavLink } from 'react-router-dom'

const UserNav = () => {
    return (
      <div className="user-nav ui vertical text menu ">
        <LogoImage />
        <div className="userBio">
          <NavLink className="item" to="my-info">
            My Info
          </NavLink>
          <NavLink className="item" to="leave-apply">
            Apply for leave
          </NavLink>
          <NavLink className="item" to="leave-status">
            Check for leave status
          </NavLink>
          <NavLink className="item" to="research">
            Research
          </NavLink>
        </div>
      </div>
    );
}

export default UserNav
