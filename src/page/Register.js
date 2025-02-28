import React, { useContext, useState } from 'react';
import login from '../assets/login.svg'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Register() {
  const navigate = useNavigate();
  const {users, setUsers} = useContext(UserContext);
  const [formData, setFormData] = useState({name:"", usermail:"", userpassword:""});
  const handleChange = (event) =>
  {
    const {name, value} = event.target;
    setFormData((prevData) => ({...prevData, [name]:value}));
    console.log(formData);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, formData]);
    navigate('/');
  }
  return (
    <div className="login-container">
      <div className="image-section">
        <img src={login} alt="Login" />
      </div>
      <div className="form-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="usermail" name="usermail" value={formData.usermail} onChange={handleChange} placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="userpassword" name="userpassword" value={formData.userpassword} onChange={handleChange} placeholder="Password" required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  )
}
