import React from "react";
import styles from "./Footer.module.scss";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
const date = new Date();
export const year = date.getFullYear();


function Footer() {
  return (
    <div className={styles.footer}>
      &copy; {year} All Rights Reserved
    </div>
  );
}

export default Footer;
