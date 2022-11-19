import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import './logout.css'

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  // return <button onClick={onLogout}>Logout</button>;
  return (
    <div className='logoutWrapper' onClick={onLogout}>
      <i class="fa-solid fa-arrow-right-from-bracket fa-xl">
      </i>
    </div>

  )
};

export default LogoutButton;
