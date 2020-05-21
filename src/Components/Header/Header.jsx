/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Styles from "./Header.module.css";
import image from "../../img/sw-logo-full.png";
import heroImage from "../../img/hero-img.png";

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
      <div className={Styles.hero}>
        <img src={heroImage} alt="Painting" className={Styles.heroImage} />
      </div>
      <section className={Styles.headerText}>
        <aside className={Styles.emphasis}>
          <h1>A future where AI and humans works hand in hand</h1>
        </aside>
        <aside className={Styles.phrase}>
          <p>
            At Saleswhale, we believe that the future of work is Collaborative
            Intelligence - where machines and AI help humans fulfil their
            highest potential by automating drudgery and producing for more
            effective results.
          </p>
          <p>
            AI assistants help to automate repetitive and mundane tasks so that
            us humans focus on creative, high-impact work that creates value and
            inspires. The result? Happier and more productive teams doing
            meaningful work.
          </p>
          <p>
            Our mission is to put an AI assistant in every company that could
            greatly benefit from it, and we're starting off strong addressing
            this need in marketing and sales teams all across the world.
          </p>
          <p>
            The future is where AI and humans work hand in hand, and we’re here
            to help businesses benefit from that.
          </p>
        </aside>
      </section>
    </header>
  );
};

export default Header;
