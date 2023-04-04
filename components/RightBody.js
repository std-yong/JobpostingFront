import React from "react";
import styles from "./RightBody.module.css";

export default function RightBody() {
  return (
    <div className={styles.right_body}>
      <div className={styles.feed_name}>
        <div className={styles.flex_center}>
          <div className={styles.big_profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileIU.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> INSTACLONE </span>
            <span className={styles.name_content_txt}> Nju</span>
          </div>
        </div>
        <a className={styles.link_txt}>전환</a>
      </div>
      <div className={styles.recommend_box}>
      </div>
      <div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileJjang.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> dation3388 </span>
            <span className={styles.name_content_txt}> instargramClone 신규가입</span>
          </div>
          <a className={styles.link_txt}>팔로우</a>
        </div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileLuffy.jpg" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> gaoudi </span>
            <span className={styles.name_content_txt}> IU 외 5명이 팔로우</span>
          </div>
          <a className={styles.link_txt}>팔로우</a>
        </div>
        <div className={styles.feed_name}>
          <div className={styles.profile_box}>
            <img className={styles.profile_img} src="rightbody/ProfileSponge.webp" />
          </div>
          <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> gaoudi </span>
            <span className={styles.name_content_txt}> IU 외 5명이 팔로우</span>
          </div>
          <a className={styles.link_txt}>팔로우</a>
        </div>
      </div>
    </div>
  );
}
