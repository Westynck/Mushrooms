import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../Main/Main";
import styles from "./App.module.scss";
import Admin from "../Admin/Admin";

import { seedMushrooms } from "../../data/seed";

// seedMushrooms();

function App() {
  const [page, setPage] = React.useState("Main");
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      {page === "Main" && <Main />}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default React.memo(App);
