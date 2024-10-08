import React, { useState } from "react";
import GoogleSignin from "../images/Google Image.png";

const NavBar = () => {
  const [user, setUser] = useState(false);
  const googleSignIn = () => {
    setUser(true);
  };
  const signOut = () => {
    setUser(false);
  };
  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};
export default NavBar;
