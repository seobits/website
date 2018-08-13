import React from "react";
import style from "./menu-header.module.css"
import logoImage from "../images/logo.png";

const MenuHeader = (props) => {
    return (
      <div className={style.menuHeader}>
        <div className={style.logo}>
            <img alt="logo" src={logoImage}></img>
        </div>
        <nav className={style.options}>
            <ul>
                <li>Portfolio</li>
                <li>Articles</li>
                <li>Experiments</li>
                <li>About</li>
            </ul>
        </nav>
      </div>
    )
  }
  
  export default MenuHeader;