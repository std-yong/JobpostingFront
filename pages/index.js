import TestNavBar from "../components/TestNavBar";
import MainBody from "../components/MainBody";
import React, { useState } from "react";

function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectedCategoriesChange = (newCategories) => {
    setSelectedCategories(newCategories);
  };

  return (
    <>
      <TestNavBar style={{ position: 'fixed', zIndex: 1 }} />
      <MainBody
        selectedCategories={selectedCategories}
        onSelectedCategoriesChange={handleSelectedCategoriesChange}
      />
    </>
  );
}

export default Home;

