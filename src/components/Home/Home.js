import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home(props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div>

          <h1>{props.name ? `Welcome - ${props.name}` : "Login please"}</h1>
          <h2>
            <Link to="/login">Login</Link>
          </h2>
          <br />
          <h2>
            <Link to="/signup">Signup</Link>
          </h2>
          <br />
          <h2>
            <Link to="/signout">Signout</Link>
          </h2>
          <br />
          <h2>
            <Link to="/update">Update Profile</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
