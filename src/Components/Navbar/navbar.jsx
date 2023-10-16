import React from "react";
import Button from "./Button/Button";
import styles from "./navbar.module.css";
import Logo from "./Logo/Logo";
import Searchbar from "./Searchbar/searchbar";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Searchbar />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default navbar;
