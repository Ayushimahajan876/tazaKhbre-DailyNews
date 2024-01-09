import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout= (props) => {
  const { logout } = useAuth0();

  return (
   
    <button  class={`btn btn-outline-${(props.mode === 'light' ? 'dark' : 'light')}`} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button>
   
  );
};

export default Logout;