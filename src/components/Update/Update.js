import React, { useState } from "react";
import styles from "./Update.module.css";
import InputControl from "../InputControl/InputControl";
import { Link } from "react-router-dom";
import { getAuth, updateProfile, updateEmail } from "firebase/auth";


// not working
function Update() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    pass: "",
  });
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: values.name || {},
    email: values.email || {},
    contact: values.contact || {},
    pass: values.pass || {},
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
    updateEmail(auth.currentUser, values.email).then(() => {
      // Email updated!
      // ...
      console.log("email updated...")
    }).catch((error) => {
      // An error occurred
      // ...
    });

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Update Profile</h1>
        <InputControl
          label="Name"
          placeholder="Enter Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Contact Number"
          placeholder="Enter contact number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, contact: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          {/* <b className={styles.error}>{errorMsg}</b> */}
          <button onClick={updateEmail}>Update</button>
          <p>
            Go back{" "}
            <span>
              <Link to="/">Click here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Update;
