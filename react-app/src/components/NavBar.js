
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchBar from './nav/SearchComponent';
import { login } from '../store/session';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const demoUser = () => {
    const obj = {
      'email': 'demo@aa.io',
      'password': 'password'
    }
    dispatch(login(obj.email, obj.password))
  }

  
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <SearchBar />
        {!user && <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>}
        {!user && <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>}
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <NavLink to='/your-products' exact={true} activeClassName='active'>
            Product Manager
          </NavLink>
        </li>
        <li>
          <NavLink to='/your-reviews' exact={true} activeClassName='active'>
            Your Reviews
            </NavLink>
        </li>
        <li>
            <NavLink to='/cart' exact={true} activeClassName='active'>
            Cart
            </NavLink>
        </li>
        {!user && <li>
            <button onClick={demoUser}>
            Demo User
            </button>
        </li>}
      </ul>
    </nav>
  );
}

export default NavBar;
