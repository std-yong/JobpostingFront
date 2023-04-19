import React from "react";
import styles from "../styles/LeftBody.module.css";
import BootstrapHead from "../components/BootstrapHead";
import { getContent } from '../pages/api';

export default LeftBody;

function searchContent(content, searchTerm) {
  return content.company_name.toLowerCase().includes(searchTerm.toLowerCase());
}

function filterContent(content, selectedCategories) {
  return selectedCategories.every((category)=> {
    const categoryKey = {
      1: "job_category",
      2: "job_location",
      3: "company_type",
      4: "experience_level",
      5: "employment_type"
    }[category.categoryId];
//// Boolean처리
    if (category.categoryId === 4) {
      const isPermanent = content[categoryKey] === true;
      const isSelectedPermanent = category.options.some(
        (option) => option === "신입"
      );
      const isSelectedTemporary = category.options.some(
        (option) => option === "경력"
      );

      if (isSelectedPermanent && isSelectedTemporary) {
        return true;
      } else if (isSelectedPermanent) {
        return isPermanent;
      } else if (isSelectedTemporary) {
        return !isPermanent;
      } else {
        return false;
      }
    } else if (category.categoryId === 5) {
      const isPermanent = content[categoryKey] === true;
      const isSelectedPermanent = category.options.some(
        (option) => option === "정규직"
      );
      const isSelectedTemporary = category.options.some(
        (option) => option === "비정규직"
      );

      if (isSelectedPermanent && isSelectedTemporary) {
        return true;
      } else if (isSelectedPermanent) {
        return isPermanent;
      } else if (isSelectedTemporary) {
        return !isPermanent;
      } else {
        return false;
      }
    } else {
      return category.options.includes(content[categoryKey]);
    }
  });
}

function LeftBody ({selectedCategories, searchTerm}) {
  const [contents, setContents] = React.useState([]);
  const hadleButtonClick = (url) => {
    window.open(url,"_blank");
  }
  React.useEffect(() => {
    async function fetchContent() {
      const contentData = await getContent();
      setContents(contentData);
    }
    fetchContent();
  }, [selectedCategories, searchTerm]);

  return (
    <>
      <BootstrapHead />
      <div className={styles.left_body}>
        {contents
          .filter((content) =>
          !selectedCategories || selectedCategories.length === 0
            ? true
            : filterContent(content, selectedCategories)
        )
        .filter((content)=> searchContent(content, searchTerm))
        .map((content) => (
            <div key={content.id} className={styles.feed_box}>
              <div className={styles.feed_name}>
                <div className={styles.profile_box}>
                  <img className={styles.profile_img} src={content.company_image_url} />
                </div>
                <span className={styles.feed_name_txt}>{content.company_name}</span>
              </div>
              <img className={styles.feed_img} src={content.job_poster} />
              <div className={styles.feed_icon}>
                <div>
                  <span className={styles.feed_name_txt}>{content.company_name}</span>
                </div>
                <div>
                  <button className={styles.image_button} onClick = {()=> hadleButtonClick(content.company_image_url)}>
                    <img className={styles.material_icons_feed} src="leftbody/send.svg" />
                  </button>
                  {/* <img className={styles.material_icons_feed} src="leftbody/favorite.svg" /> */}
                  
                  {/* <img className={styles.material_icons_feed} src="leftbody/bookmark.svg" /> */}
                </div>
              </div>
              <div className="feed_content">
                <p className="feed_txt">
                  <span className={styles.feed_txt}>{content.job_description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}