import React, { useState } from "react";

const categories = [  
    {id: 1, name: "직무", options: ["IT", "마케팅", "경영","영업","회계","운송"]},
    {id: 2, name: "지역", options: ["서울", "경기", "경북","경남","충청","충북","전남","전북","강원"]},
    {id: 3, name: "기업형태", options: ["스타트업", "강소기업","중소기업", "대기업","외국계","공기업"]},
    {id: 4, name: "경력", options: ["신입", "1~3","4~6", "7~10","10년 이상"]}
  ];

const FilterBox = () =>{

    const [selectedCategories, setSelectedCategories] = useState([]);
    const handleCategoryChange = (categoryId, option) => {
      let newCategories = [...selectedCategories];
      const index = newCategories.findIndex(c => c.categoryId === categoryId);
  
      if (index >= 0) {
        if (newCategories[index].options.includes(option)) {
          newCategories[index].options = newCategories[index].options.filter(o => o !== option);
        } else {
          newCategories[index].options.push(option);
        }
      } else {
        newCategories.push({ categoryId: categoryId, options: [option] });
      }
  
      setSelectedCategories(newCategories);
    };
    return(
        <>
          <div className="container text-center" style={{backgroundColor: "#f2f2f2",width: '80%', marginTop : '5px', marginBottom : '5px', padding : '12px',borderRadius : '5px'}}>
          {categories.map((category, index) => (
            <div key={category.id} className={`category ${index === categories.length - 1 ? '' : 'border-right'}`}>
            <div className="bigcategory">{category.name}</div>
            <div className="category-options">
                {category.options.map(option => (
                <label key={option}>
                    <input
                    type="checkbox"
                    checked={selectedCategories.some(c => c.categoryId === category.id && c.options.includes(option))}
                    onChange={() => handleCategoryChange(category.id, option)}
                    />
                    {option}
                </label>
                ))}
            </div>
            </div>
      ))}
        <style jsx>
            {`
            .category {
                    margin-right: 0px;
                    font-size: 20px;
                    background-color: #f2f2f2;
                    border-radius: 5px;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                    text-align: left;
                    }
                    .category.selected {
                    background-color: #ff8080;
                    }
                    .category-options {
                    margin-top: 5px;
                    margin-bottom : 5px;
                    display : flex;
                    flex-wrap : wrap;
                    font-size: 15px;
                    gap: 10px;
                    padding : 5px;
                    }
                    .category-options label {
                    margin-right: 10px;
                    }
                    .category-options input[type="checkbox"] {
                    margin-right: 5px;
                    }
                    .bigcategory {
                      font-size : 16px;
                      padding : 5px;
                      font-weight : bold;
                    } 
            `}
        </style>
    </div>
  </>
);
}
export default FilterBox;






