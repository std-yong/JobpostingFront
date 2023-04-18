import React from "react";
import styles from "../styles/LeftBody.module.css";
import BootstrapHead from "../components/BootstrapHead";
import { getContent } from '../pages/api';

export default LeftBody;

function filterContent(content, selectedCategories) {
  return selectedCategories.every((category)=> {
    const categoryKey = {
      1: "job_category",
      2: "job_location",
      3: "company_type",
      4: "experience_level",
    }[category.categoryId];

    return category.options.includes(content[categoryKey]);
  })
}

function LeftBody ({selectedCategories}) {
  const [contents, setContents] = React.useState([]);

  React.useEffect(() => {
    async function fetchContent() {
      const contentData = await getContent();
      setContents(contentData);
    }
    fetchContent();
  }, [selectedCategories]);

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
                  <img className={styles.material_icons_feed} src="leftbody/favorite.svg" />
                  <img className={styles.material_icons_feed} src="leftbody/send.svg" />
                  <img className={styles.material_icons_feed} src="leftbody/bookmark.svg" />
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