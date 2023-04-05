import React, { useState } from "react";
import styles from "../styles/LeftBody.module.css";
import BootstrapHead from "./BootstrapHead";

export default function LeftBody({ feeds }) {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 선택된 이미지 인덱스

  // 다음 이미지를 보여주는 함수
  const nextImage = () => {
    setActiveIndex(activeIndex === feeds[0].image.length - 1 ? 0 : activeIndex + 1);
  };

  // 이전 이미지를 보여주는 함수
  const prevImage = () => {
    setActiveIndex(activeIndex === 0 ? feeds[0].image.length - 1 : activeIndex - 1);
  };

  return (
    <>
      <BootstrapHead />
      <div className={styles.left_body}>
        {feeds.map((feed) => (
          <div key={feed.user_id} className={styles.feed_box}>
            <div className={styles.feed_name}>
              <div className={styles.profile_box}>
                <img
                  className={styles.profile_img}
                  src={feed.profile_image}
                  alt={feed.user_id}
                />
              </div>
              <span className={styles.feed_name_txt}>{feed.user_id}</span>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {feed.image.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                  >
                    <img src={image} className="d-block w-100" />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                onClick={prevImage}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
                onClick={nextImage}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className={styles.feed_icon}>
              <div>
                <span className={styles.feed_name_txt}>{feed.user_id}</span>
              </div>
              <div>
                <img className={styles.material_icons_feed} src="leftbody/favorite.svg" />
                <img className={styles.material_icons_feed} src="leftbody/send.svg" />
                <img className={styles.material_icons_feed} src="leftbody/bookmark.svg" />
              </div>
            </div>
            <div className="feed_content">
              <p className="feed_txt">
                <span className={styles.feed_txt}>{feed.content}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
const feeds = [  {    user_id: 'john_doe',    content: 'Hello world!',    profile_image: 'https://image.jtbcplus.kr/data/contents/jam_photo/202208/02/afc07921-a3d6-4a26-872a-184d7a054a42.jpg',    image: ['https://daoift3qrrnil.cloudfront.net/content_images/images/000/127/434/original/%EC%B1%84%EC%9A%A9%EA%B3%B5%EA%B3%A0_r1.png?1658714714','https://ottogi.co.kr/pds/editor/2020-10-19_517133489[2].jpg','https://ottogi.co.kr/pds/editor/2020-10-19_517133489[2].jpg','https://ottogi.co.kr/pds/editor/2020-10-19_517133489[2].jpg']
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://post-phinf.pstatic.net/MjAxOTA2MjRfMTcg/MDAxNTYxMzUzMjkyNjIx.oP-m6lCS0OfZtmZr3EggV6SXr8lZclr0NamrgZx1AIEg.RhB9HljEXJLXfDTBC23pXcEhKDrcSyS0p9GLAEeXWosg.JPEG/IMG_3231.jpg?type=w1200'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://leadon-brandsite-prd-s3-seoul-img.s3.amazonaws.com/ElandCsr/editor/2022122208233310432139-dde9-498c-922b-ba943b0a3e0c.png'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://miricanvas.zendesk.com/hc/article_attachments/4408461715737/______1_.png'
  },
  {
    user_id: 'jane_doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profile_image: 'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg',
    image: 'https://ottogi.co.kr/pds/editor/2020-10-19_517133489[2].jpg'
  }
]
