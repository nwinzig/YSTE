import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signup.css'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([])
    if (password === repeatPassword) {
      const obj = {
        'first_name': firstName,
        'last_name': lastName,
        username,
        email,
        password
      }
      const data = await dispatch(signUp(obj));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Password and Repeat Password must match'])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-form-wrapper'>
    <form className='signupform' onSubmit={onSignUp}>
      <div className='signup-welcome'>Welcome to YSTE!</div>
      <div className='signup'>Sign up</div>
      <div className='signuperrors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
          ))}
      </div>
      <div>

        <input className='signup-input-field'
          minlength="2" maxlength="50"
          type='text'
          name='firstname'
          required
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          />
      </div>
      <div>

        <input className='signup-input-field'
          minlength="2" maxlength="50"
          type='text'
          name='lastname'
          required
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          ></input>
      </div>

      <div>

      <input className='signup-input-field'
          minlength="4" maxlength="100"
          type='text'
          name='username'
          required
          placeholder='Username'
          onChange={updateUsername}
          value={username}
          ></input>
      </div>
      <div>
      <input className='signup-input-field'
          minlength="5" maxlength="100"
          type='email'
          name='email'
          placeholder='Email'
          required
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
      <input className='signup-input-field'
          minlength="6" maxlength="20"
          type='password'
          name='password'
          required
          placeholder='Password'
          onChange={updatePassword}
          value={password}
          ></input>
      </div>
      <div>
      <input className='signup-input-field'
          minlength="6" maxlength="20"
          type='password'
          name='repeat_password'
          placeholder='Confirm Password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          ></input>
      </div>
      <button className='signupbtn' type='submit'>Sign Up</button>
    </form>
          </div>
  );
};

export default SignUpForm;
