import React from "react";
// import PropTypes from "prop-types";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flew-row align-items-center justify-content-center p-30`}
    >
      Copyright © 2022 Mushrooms Inc.
    </footer>
  );
}
Footer.propTypes = {};

Footer.defaultProps = {};

export default React.memo(Footer);
