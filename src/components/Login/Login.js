import React from "react";
import styles from "./login.module.css"
import InputControl from "../InputControl/InputControl"

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="User Name" placeholder="Enter email address"/>
      </div>
    </div>
  );
}

export default Login;
