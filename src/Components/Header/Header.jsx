/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Styles from "./Header.module.css";
import image from "../../img/sw-logo-full.png";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div>
        <nav className={Styles.navBar}>
          <img src={image} alt="saleswhale logo" className={Styles.logo} />
          <ul className={Styles.nav}>
            <li className={Styles.list}>Why Saleswhale?</li>
            <li className={Styles.list}>Product</li>
            <li className={Styles.list}>Company</li>
          </ul>
          <div className={Styles.link}>
            <a href="#" className={Styles.login}>
              Log in
            </a>
            <a href="#" className={Styles.demo}>
              Get A Demo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
