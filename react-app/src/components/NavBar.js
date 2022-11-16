
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchBar from './nav/SearchComponent';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <SearchBar />
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
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
              <NavLink to='/cart' exact={true} activeClassName='active'>
            Cart
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
