import React from "react";
import styles from "../styles/LeftBody.module.css";
import BootstrapHead from "../components/BootstrapHead";
import { getContent } from './api';

export default LeftBody;

function LeftBody () {
  const [contents, setContents] = React.useState([]);

  React.useEffect(() => {
    async function fetchContent() {
      const contentData = await getContent();
      setContents(contentData);
    }
    fetchContent();
  }, []);

  return (
    <>
      <BootstrapHead />
      <div className={styles.left_body}>
        {contents.map((content) => (
          <div key={content.id} className={styles.feed_box}>
            <div className={styles.feed_name}>
              <div className={styles.profile_box}>
                <img className={styles.profile_img} src={content.company_image} />
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
