import React, { useState } from "react";

const categories = [  
    {id: 1, name: "직무", options: ["IT", "마케팅", "경영"]},
    {id: 2, name: "지역", options: ["서울", "경기", "부산"]},
    {id: 3, name: "기업형태", options: ["스타트업", "중소기업", "대기업"]}
];

function CheckBox() {
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

  return (
    <div className="category-box">
      {categories.map(category => (
        <div key={category.id}>
          <p>{category.name}</p>
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
      ))}
      <style jsx>{`
        .category-box {
          background-color: #f2f2f2;
          padding: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 500px;
          height: 100px;
          margin-left: 363px;
        }
        .category {
          margin-right: 30px;
          font-size: 20px;
        }
        .selected {
          font-weight: bold;
          color : tomato;
        }
        .sub-category {
          margin-left: 20px;
        }
      `}</style>
      
    </div>
  );
}

export default CheckBox;
