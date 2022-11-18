import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  // return <button onClick={onLogout}>Logout</button>;
  return (
    <i class="fa-solid fa-arrow-right-from-bracket fa-xl" onClick={onLogout}>

    </i>
  )
};

export default LogoutButton;
