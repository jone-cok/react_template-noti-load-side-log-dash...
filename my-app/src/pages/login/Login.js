import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import styles from "./auth.module.scss";
import loginimg from "../../assets/login.png";
import Card from "../../components/card/Card";

function Login() {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginimg} alt="Login" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary  --btn-block">Login </button>
            <div className={styles.Links}>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>--or--</p>
          </form>

          <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" />
            Login with google
          </button>
          <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
}

export default Login;
