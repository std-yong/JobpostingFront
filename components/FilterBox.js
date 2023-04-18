import React, { useState } from "react";
import styles from "../styles/FilterBox.module.css";

const categories = [  
    {id: 1, name: "직무", options: ["전략기획", "마케팅", "재무", "법무","인사","IT","데이터 분석","디자인"
                                  ,"영업","무역","조달","물류","교육","미디어","보험","건설","생산","연구개발(R&D)"]},
    {id: 2, name: "지역", options: ["서울", "제주", "광주","대구","대전","부산","울산","인천","강원","경기","경남","경북","전남","전북","충남","충북"]},
    {id: 3, name: "기업형태", options: ["대기업", "중견기업","중소기업", "소기업","스타트업"]},
    {id: 4, name: "경력", options: ["신입", "경력"]}
  ];

const FilterBox = ({selectedCategories, onSelectedCategoriesChange}) =>{
    //const [selectedCategories, setSelectedCategories] = useState([]);
    const handleCategoryChange = (categoryId, option, checked) => {
      let newCategories = [...selectedCategories];
      const categoryIndex = newCategories.findIndex((category) => category.categoryId === categoryId);
    
      if (categoryIndex >= 0) {
        if (checked) {
          newCategories[categoryIndex].options.push(option);
        } else {
          newCategories[categoryIndex].options = newCategories[categoryIndex].options.filter((opt) => opt !== option);
          if (newCategories[categoryIndex].options.length === 0) {
            newCategories = newCategories.filter((category) => category.categoryId !== categoryId);
          }
        }
      } else if (checked) {
        newCategories.push({ categoryId: categoryId, options: [option] });
      }
    
      if (onSelectedCategoriesChange) {
        onSelectedCategoriesChange(newCategories);
      }
    };
    
    return (
      <>
        <div className={`${styles.container} text-center`}>
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`${styles.category} ${index === categories.length - 0 ? "" : "border-right"}`}
            >
              <div className={styles.bigcategory}>{category.name}</div>
              <div className={styles["category-options"]}>
                {category.options.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.some(
                        (c) => c.categoryId === category.id && c.options.includes(option)
                      )}
                      onChange={(e) =>
                        handleCategoryChange(category.id, option, e.target.checked)
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default FilterBox;