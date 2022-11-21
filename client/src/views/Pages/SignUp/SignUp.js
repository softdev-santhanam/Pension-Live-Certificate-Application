import React from "react";
import '../SignUp/SignUp.css';

export default function SignUp() {
  return (
    <div className='signUp'>
    <h1>Sign Up</h1>
    <form>
        <input type={'email'} placeholder={'Email'}></input>
        <input type={'password'} placeholder={'Password'}></input>
        <input type={'password'} placeholder={'Confirm Password'}></input>
        <button type={'email'}>Sign up</button>
    </form>
</div>
  );
}
