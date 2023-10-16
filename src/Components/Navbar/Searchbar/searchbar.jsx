import React from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../../assets/Search icon.svg";

const searchbar = () => {
  return (
    <form className={styles.wrapper}>
      <input
        className={styles.searchbar}
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchbutton}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default searchbar;
