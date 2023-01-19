import React from 'react';
// import PropTypes from 'prop-types';

import styles from "./HamburgerMenu.module.scss";

function HamburgerMenu({ setPage }) {
    return (
        <ul className={`${styles.menuContainer} card p-20`}>
            <li onClick={() => setPage("admin")}>Ajout d'un champignon</li>
            <li>favoris</li>
            <li>connexion</li>
        </ul>
    );
}
HamburgerMenu.propTypes = {};

HamburgerMenu.defaultProps = {};

export default React.memo(HamburgerMenu);