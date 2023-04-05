import React from "react";
import styles from "../styles/LeftBody.module.css";

export default LeftBody;

function LeftBody () {
  return (
    <div className={styles.left_body}>
      {feeds.map((feed) => (
        <div key={feed.id} className={styles.feed_box}>
          <div className={styles.feed_name}>
            <div className={styles.profile_box}>
              <img className={styles.profile_img} src={feed.profile_image} />
            </div>
            <span className={styles.feed_name_txt}>{feed.user_id}</span>
          </div>
          <img className={styles.feed_img} src={feed.image} />
          <div className={styles.feed_icon}>
            <div>
              <span className={styles.feed_name_txt}>{feed.user_id}</span>
            </div>
            <div>
              <img className={styles.material_icons_feed} src="leftbody/favorite.svg"/>
              <img className={styles.material_icons_feed} src="leftbody/send.svg"/>
              <img className={styles.material_icons_feed} src="leftbody/bookmark.svg"/>
            </div>
          </div>
          <div className="feed_content">
            <p className="feed_txt">
              <b>{feed.user_id}</b> {feed.content}
            </p>
          </div>
          <div className="feed_reply">
            <span className="feed_txt">
              <b>mychew</b> 제주도 가고 싶어요 ㅠㅠ
            </span>
            <span className="feed_txt">
              <b>cho</b> 제주도 ㄱ ㄱ
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const feeds = [
  {
    user_id: 'john_doe',
    content: 'Hello world!',
    profile_image: 'https://image.jtbcplus.kr/data/contents/jam_photo/202208/02/afc07921-a3d6-4a26-872a-184d7a054a42.jpg',
    image: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
    like_count: 10
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://post-phinf.pstatic.net/MjAxOTA2MjRfMTcg/MDAxNTYxMzUzMjkyNjIx.oP-m6lCS0OfZtmZr3EggV6SXr8lZclr0NamrgZx1AIEg.RhB9HljEXJLXfDTBC23pXcEhKDrcSyS0p9GLAEeXWosg.JPEG/IMG_3231.jpg?type=w1200',
    like_count: 20
  }
];