import React from "react";
import styles from "./Signup.module.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function Signup() {
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
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");
    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        setSubmitBtnDisabled(false);
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        console.log(user);
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
        <h1 className={styles.heading}>Signup</h1>
        <InputControl
          label="Name"
          placeholder="Enter Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        {/* <b className={styles.error}>{passMsg}</b> */}

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmit} disabled={submitBtnDisabled}>
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
