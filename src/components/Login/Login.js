import React from "react";
import styles from "./login.module.css";
import InputControl from "../InputControl/InputControl";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  // const [ passMsg, setPassMsg ] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);
        console.log(res);
        // const user = res.user;
        // await updateProfile(user, {
        //   displayName: values.name,
        // });
        // console.log(user);
        navigate("/");
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        // console.log("Error: ", err.message);
        setErrorMsg(err.message);
        // const errCode = err.message;
        // setPassMsg(`${errCode}`);
      });
    // console.log(values);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitBtnDisabled} onClick={handleSubmit}>
            Login
          </button>
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