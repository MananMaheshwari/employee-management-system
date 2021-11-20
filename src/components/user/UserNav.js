import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNav = () => {
    return (
            <div className="user-nav ui vertical text menu ">
                <img className="user-navImg" src='images/984px-Logo-LNMIIT.svg.png' alt="LNMIIT logo"/>
                    <NavLink className="item" to="my-info">
                        My Info
                    </NavLink>
                    <NavLink className="item" to="leave-apply">
                        Apply for leave
                    </NavLink>
                    <NavLink className="item" to="leave-status">
                        Check for leave status
                    </NavLink>
            </div>
    )
}

export default UserNav
