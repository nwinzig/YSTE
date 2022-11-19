
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchBar from './nav/SearchComponent';
import { login } from '../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './navbar.css'

const NavBar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const demoUser = () => {
    const obj = {
      'email': 'demo@aa.io',
      'password': 'password'
    }
    dispatch(login(obj.email, obj.password))
  }

    // click to go to category page
    function changeToCars(){
        history.push('/category/Cars')
    }
    function changeToClothing(){
        history.push('/category/Clothing')
    }
    function changeToElectronics(){
        history.push('/category/Electronics')
    }
    function changeToHomeGoods(){
        history.push('/category/Home Goods')
    }
    function changeToMisc(){
        history.push('/category/miscellaneous')
    }

  return (
    <nav>
      <div className='navbarWrapper'>
        <div className='logoWrapper'>
          <NavLink to='/' exact={true} activeClassName='active' className='logo'>
            YSTE
          </NavLink>
        </div>
        <div className='searchWrapper'>
        <SearchBar />
        </div>
        {!user && <div className='loginWrapper'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>}
        {!user && <div className='signupWrapper'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>}
        {/* <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
        <div className='productmanagerWrapper'>
          <NavLink to='/your-products' exact={true} activeClassName='active' className='black'>
            <i class="fa-solid fa-shop fa-xl" ></i>
          </NavLink>
        </div>
        <div className='reviewsWrapper'>
          <NavLink to='/your-reviews' exact={true} activeClassName='active' className='black'>
            <i class="fa-regular fa-clipboard fa-xl"></i>
          </NavLink>
        </div>
        <div className='logoutWrapper'>
          <LogoutButton />
        </div>
        {!user && <div className='demoWrapper'>
            <button onClick={demoUser}>
            Demo User
            </button>
        </div>}
        <div className='cartWrapper'>
            <NavLink to='/cart' exact={true} activeClassName='active' className='black'>
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
            </NavLink>
        </div>
      </div>
      <div className='categoryWrapper'>
        <div className='cars' onClick={changeToCars}>
          Cars
        </div>
        <div className='clothing' onClick={changeToClothing}>
          Clothing
        </div>
        <div className='electronics' onClick={changeToElectronics}>
          Electronics
        </div>
        <div className='homeGoods' onClick={changeToHomeGoods}>
          Home Goods
        </div>
        <div className='miscellaneous' onClick={changeToMisc}>
          Miscellaneous
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
