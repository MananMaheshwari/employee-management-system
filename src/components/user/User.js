import React from 'react'
import UserNav from './UserNav';
import UserBlob from "./UserBlob";
// import UserInfo from './display page/UserInfo';
// import LeaveApplyForm from './display page/LeaveApplyForm';
import { Outlet} from 'react-router-dom'
// import DisplayContainer from './display page/DisplayContainer';
import './User.css';


const User = (props) => {
console.log(props);
    return (
      <div className="userMain">
        <UserNav />
        <div className="userMainClass">
          <div className="userBlobParent">
            <UserBlob />
          </div>
          <div className="displayMain">
            <Outlet />
          </div>
        </div>
        {/* {console.log(props.match)} */}
        {/* <Routes>
                <Route path="/user/my-info" element={<UserInfo/>}/>
                <Route path="/user/leave-apply" element={<LeaveApplyForm/>}/>
            </Routes>
             */}
      </div>
    );
}

export default User
