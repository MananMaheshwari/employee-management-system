import './App.css';
import Login from './components/login/Login';
import User from './components/user/User';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import UserInfo from './components/user/display page/UserInfo';
import LeaveApplyForm from './components/user/display page/LeaveApplyForm';
import LeaveStatus from './components/user/display page/LeaveStatus';
import Research from './components/user/display page/Research';
import "./components/user/User.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/user" element={<User />}>
            <Route path="my-info" element={<UserInfo />} />
            <Route path="leave-apply" element={<LeaveApplyForm />} />
            <Route path="leave-status" element={<LeaveStatus />} />
            <Route path="research" element={<Research />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
