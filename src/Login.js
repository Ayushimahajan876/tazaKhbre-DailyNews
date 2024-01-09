import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login= (props) => {
  const { loginWithRedirect } = useAuth0();

  return  <button onClick={() => loginWithRedirect()} class={`btn btn-outline-${(props.mode === 'light' ? 'dark' : 'light')}`}>LogIn</button>
  
};

export default Login;