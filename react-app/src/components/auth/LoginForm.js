import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './login.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(["The provided credentials were invalid"]);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='wrapping-login-container'>
    <form className='loginform' onSubmit={onLogin}>
      <div className='page-header'> Welcome to YSTE!</div>
      <div className='login'>Log in</div>
      <div className='loginerrors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
          ))}
      </div>
        <div className='input-wrapper'>

        {/* <label htmlFor='email'>Email</label> */}
        <input className='input-field'
          minlength="2" maxlength="100"
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          />
      <div>
        {/* <label htmlFor='password'>Password</label> */}
        <input className='input-field'
          minlength="6" maxlength="100"
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          />
          </div>
          </div>
        <button className='loginbtn' type='submit'>Login</button>
    </form>
  </div>
  );
};

export default LoginForm;
