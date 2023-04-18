import React from "react";
import styles from "../styles/MainBody.module.css";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";
import FilterBox from "./FilterBox"; // FilterBox 컴포넌트를 가져옵니다.

function MainBody({ selectedCategories, searchTerm, onSelectedCategoriesChange }) {
  return (
    <div className={styles.MainBody}>
      <FilterBox
        className={styles.filterBox} // CSS 클래스를 적용합니다.
        selectedCategories={selectedCategories}
        onSelectedCategoriesChange={onSelectedCategoriesChange}
      />
      <LeftBody selectedCategories={selectedCategories} />
      <RightBody />
    </div>
  );
}

export default MainBody;
