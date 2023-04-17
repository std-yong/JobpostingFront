import TestNavBar from "../components/TestNavBar";
import MainBody from "../components/MainBody";
import BootstrapHead from "../components/BootstrapHead";
import FilterBox from "../components/FilterBox";
import React, { useState } from "react";

function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectedCategoriesChange = (newCategories) => {
    setSelectedCategories(newCategories);
  };

  return (
    <>
      <TestNavBar style={{ position: 'fixed', zIndex: 1 }} />
      <div style={{ paddingTop: '74px' }}>
        <FilterBox
          selectedCategories={selectedCategories}
          onSelectedCategoriesChange={handleSelectedCategoriesChange}
        />
        <MainBody
          selectedCategories={selectedCategories}
        />
      </div>
    </>
  );
}

export default Home;

