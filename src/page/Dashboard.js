import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const {users}= useContext(UserContext);
  useEffect(() => {
    if (!users.usermail) {
      navigate('login'); // Redirect to login if user is not authenticated
    }
  }, [users, navigate]);
  return (
    <div>Dashboard</div>
  )
}
