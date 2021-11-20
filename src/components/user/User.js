import React from 'react'
import UserNav from './UserNav';
// import UserInfo from './display page/UserInfo';
// import LeaveApplyForm from './display page/LeaveApplyForm';
import { Outlet} from 'react-router-dom'
// import DisplayContainer from './display page/DisplayContainer';
import './User.css';


const User = (props) => {
console.log(props);
    return (
        <>
            <UserNav/>
            {/* {console.log(props.match)} */}
            {/* <Routes>
                <Route path="/user/my-info" element={<UserInfo/>}/>
                <Route path="/user/leave-apply" element={<LeaveApplyForm/>}/>
            </Routes>
             */}
            <div className="display-page-component">
                <div className="display-page-header">
                    <i class="circular user icon"></i> This is the display header
                </div>
                
            </div> 
            
             <Outlet/>
        </>
    );
}

export default User
