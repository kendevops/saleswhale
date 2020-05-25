/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image from "../../img/sw-logo-full.png";
import "font-awesome/css/font-awesome.min.css";

import List from "./List";

import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={Styles.container}>
        <img src={image} alt="Saleswhale logo" />
        <div className={Styles.listItem}>
          <div>
            <List
              header="Why Saleswhale"
              item1="Collaborative Intelligence"
              item2="AI Assistant Capabilities"
              item3="Customer Stories"
              item4="Use Case - Technology"
              item5="Use Case - Education"
              item6="Use Case - Events"
            />
          </div>
          <div>
            <List
              header="Product"
              item1="AI Conversations"
              item2="Lead Enrichment"
              itme3="Lead Enrichment"
              item4="Deal Intelligence"
              item5="Workflow Integration"
            />
          </div>
          <div>
            <List
              header="Company"
              item1="About us"
              item2="Blog Resources"
              itme3="Careers"
              item4="Help Centre"
            />
          </div>
          <div className={Styles.address}>
            <div className={Styles.contact}>
              <List header="Contact" item1="hello@saleswhale.com" />
            </div>
            <div>
              <List
                header="US Office"
                item1="1701 Rhode Island Ave NW Washington, DC 20036"
              />
            </div>
            <div>
              <List
                header="Singapore Office"
                item1="155B Telok Ayer Street Singapore, 068611"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.foot}>
        <div className={Styles.terms}>
          <h3>Privacy Terms</h3>
          <p>© 2020 Saleswhale, Inc. All rights reserved.</p>
        </div>
        <div className={Styles.icons}>
          <ul className={Styles.social}>
            <li>
              <a href="#" className={Styles.facebook}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className={Styles.twitter}>
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className={Styles.linkedin}>
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
