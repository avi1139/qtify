import React from "react";
import styles from "./herosection.module.css";
import headphones from "../../assets/vibrating-headphone 1.png";

const herosection = () => {
  return (
    <div className={styles.herosection}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div>
        <img src={headphones} alt="headphones" width={212} />
      </div>
    </div>
  );
};

export default herosection;
