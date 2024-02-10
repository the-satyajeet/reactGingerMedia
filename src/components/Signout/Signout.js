import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Signout.module.css"

function Signout() {
    const navigate = useNavigate();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
        navigate("/");
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  return <div className={styles.container}>
    <div className={styles.innerBox}>

    </div>
  </div>;
}

export default Signout;
