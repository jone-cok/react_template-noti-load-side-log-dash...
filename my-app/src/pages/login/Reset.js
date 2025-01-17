import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import styles from "./auth.module.scss";
import resetpassword from "../../assets/forgot.png";
import Card from "../../components/card/Card";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetpassword} alt="Login" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Passwrod</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <button className="--btn --btn-primary  --btn-block">
              Reset Password{" "}
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
