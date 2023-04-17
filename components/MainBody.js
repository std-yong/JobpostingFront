import React from "react";
import styles from "../styles/MainBody.module.css";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

function MainBody ({selectedCategories, searchTerm}) {
  return (
    <div className={styles.MainBody}>
    <LeftBody selectedCategories={selectedCategories}  />
    <RightBody />
  </div>
  );
}

export default MainBody;
