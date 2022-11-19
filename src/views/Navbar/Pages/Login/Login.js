import React from 'react';
import '../Login/Login.css';

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <input type={'email'} placeholder={'Email'}></input>
            <input type={'password'} placeholder={'Password'}></input>
            <button type={'email'}>Login</button>
        </form>
    </div>
  )
}

export default Login