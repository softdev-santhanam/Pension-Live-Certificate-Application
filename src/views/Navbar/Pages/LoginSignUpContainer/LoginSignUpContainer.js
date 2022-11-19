import { useRef, useState } from "react";
import Login from "../Login/Login";

// importing its css
import "../LoginSignUpContainer/LoginSignUpContainer.css";
import SignUp from "../SignUp/SignUp";

const LoginSignUpContainer = () => {
  // defining state to make sure if login or signup is clicked or visible or active
  const [login, setLogin] = useState(true);

  // creating reference for login-signup-container
  const loginSignUpContainerRef = useRef(null);

  const handleClick = () => {
    setLogin(!login);

    // using refs we can do DOM manipulation
    loginSignUpContainerRef.current.classList.toggle("active");
  };
  return (
    <div className="login-signup-container" ref={loginSignUpContainerRef}>
      <Login />
      <div className="side-div">
        <button type="button" onClick={handleClick}>
          {login ? "Signup" : "Login"}
        </button>
      </div>
      <SignUp />
    </div>
  );
};

export default LoginSignUpContainer;
