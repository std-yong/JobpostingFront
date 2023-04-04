import React from "react";
import styles from "../styles/RightBody.module.css";

export default function RightBody() {
  return (
    <div className={styles.right_body}>
      <div className={styles.feed_name}>
        <div className={styles.flex_center}>
          <div className={styles.big_profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileIU.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> IUCOMPANY</span>
            <span className={styles.name_content_txt}> 클라우드 직군 대규모 채용</span>
          </div>
        </div>
        <a className={styles.link_txt}> 지원</a>
      </div>
      <div className={styles.recommend_box}>
      </div>
      <div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileJjang.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> 짱구건설</span>
            <span className={styles.name_content_txt}> 건설/기계 직군 채용</span>
          </div>
          <a className={styles.link_txt}> 지원</a>
        </div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileLuffy.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> 백수</span>
            <span className={styles.name_content_txt}> 소주나마시자</span>
          </div>
          <a className={styles.link_txt}> 지원</a>
        </div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileSponge.webp" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> 블랙기업</span>
            <span className={styles.name_content_txt}> 07시 출근 22시 퇴근 주말없이</span>
          </div>
          <a className={styles.link_txt}> 지원</a>
        </div>
      </div>
    </div>
  );
}
