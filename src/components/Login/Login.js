import React from "react";
import styles from "./login.module.css"
import InputControl from "../InputControl/InputControl"
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="User Name" placeholder="Enter email address"/>
        <InputControl label="Password" placeholder="Enter password" />

        <div className={styles.footer}>
            <button>Login</button>
            <p>
                New here?{" "}
                <span>
                    <Link to="/signup">Sign up</Link>
                </span>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
