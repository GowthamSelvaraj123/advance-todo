import React, { useContext, useState } from 'react';
import loginImg from '../assets/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { LoginContext } from '../context/LoginContext';

export default function Login() {
  const navigate = useNavigate();
  const {login, setLogin} = useContext(LoginContext);
  const {users, setUsers} = useContext(UserContext);
  const [formData, setFormData] = useState({usermail:"", userpassword:""});
  const handleChange = (event) =>
  {
    const {name, value} = event.target;
    setFormData((prevData) => ({...prevData, [name]:value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(users.find((item) => item.usermail == formData.usermail))
    {
      setLogin(true);
    }
    else
    {
      alert("User unauthorized");
    }
  }
  return (
    <div className="login-container">
      <div className="image-section">
        <img src={loginImg} alt="Login" />
      </div>
      <div className="form-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="usermail" name="usermail" value={formData.usermail} onChange={handleChange} placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="userpassword" name="userpassword" value={formData.userpassword} onChange={handleChange} placeholder="Password" required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          <p>Don't Have an account <Link to="/register">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}
