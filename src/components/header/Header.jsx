import React, { Fragment } from "react";
import { useState } from "react";

import styles from "./Header.module.scss";
import logo from "../../../public/images/Mushrooms.png";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

// import PropTypes from "prop-types";

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className={`${styles.header} d-flex fle-row align-items-center`}>

      <div className="flex-fill">
        <img onClick={() => setPage("Main")} src={logo} alt="logo Mushrooms" />
      </div>
      <ul className={styles.headerList}>
        <button onClick={() => setPage("admin")} className="btn mr-5 btn-reverse-primary">
          <span>Ajout d'un champignon</span>
        </button>
        <button className="btn mr-5 btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>favoris</span>
        </button>
        <button className="btn btn-primary">
          <span>connexion</span>
          <i className="fa-solid fa-user ml-5"></i>
        </button>
      </ul>
      <i onClick={() => setShowMenu(true)} className={`${styles.headerXs} fa-solid fa-bars  fa-2x `}></i>

      {showMenu // J'affiche mon menu hamburger si showMenu est à true et je cache mon menu hamburger si showMenu est à false
        && (
          // J'ajoute un div avec un onClick qui permet de cacher mon menu hamburger quand on clique en dehors du menu
          <Fragment>
            <div onClick={() => setShowMenu(false)} className="calc" ></div>
            <HamburgerMenu setPage={setPage} />
          </Fragment>
        )}
    </header>
  );
}
Header.propTypes = {};

Header.defaultProps = {};

export default React.memo(Header);
