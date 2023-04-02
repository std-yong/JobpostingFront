import React from "react";

export default RightBody;

function RightBody () {

    return(

    <div className={styles.right_body}>
        <div className={`${styles.feed_name} ${styles.justify_between}`}>
        <div className={styles.flex_center}>
            <div className={styles.big_profile_box}>
            <img
                className={styles.profile_img}
                src= "rightbody/ProfileIU.jpg" />
            </div>
            <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> INSTACLONE </span>
            <span className={styles.name_content_txt}> Nju</span>
            </div>
        </div>

        <a className={styles.link_txt}>
            전환
        </a>
        </div>

        <div className={styles.recommend_box}>
        <span style={{ color: 'gray' }}> 회원님을 위한 추천</span>
        <span style={{ fontSize: '12px' }}> 모두 보기 </span>
        </div>
        <div>
        <div className={`${styles.feed_name} ${styles.justify_between}`}>
            <div className={styles.profile_box}>
            <img
                className={styles.profile_img}
                src="rightbody/ProfileJjang.jpg"
            />
            </div>
            <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> dation3388 </span>
            <span className={styles.name_content_txt}> instargramClone 신규가입</span>
            </div>
            <a className={styles.link_txt}>
            팔로우
            </a>
        </div>
        <div className={`${styles.feed_name} ${styles.justify_between}`}>
            <div className={styles.profile_box}>
            <img
                className={styles.profile_img}
                src="rightbody/ProfileLuffy.jpg"
            />
            </div>
            <div className={styles.name_content}>
            <span className={styles.feed_name_txt}> gaoudi </span>
            <span className={styles.name_content_txt}> IU 외 5명이 팔로우</span>
            </div>
            <a className={styles.link_txt}>
            팔로우
            </a>
        </div>
        <div className={`${styles.feed_name} ${styles.justify_between}`}>
            <div className={styles.profile_box}>
                <img
                    className={styles.profile_img}
                    src="rightbody/ProfileSponge.webp"
                />
            </div>
            <div className={styles.name_content}>
                <span className={styles.feed_name_txt}> gaoudi </span>
                <span className={styles.name_content_txt}> IU 외 5명이 팔로우</span>
            </div>
            <a className={styles.link_txt}>
            팔로우
            </a>
        </div> 
        </div>
        <div class="comment_box">
                <span> 인스타그램 클론 코딩 </span>
                <span> 주소창 </span>
                <br />
                <span> 날짜, 이름 </span>
        </div>
    </div>       
    );
  }

const styles = {

right_body: `
    padding-top: 20px;
    width: 300px;
    height: 1000px;
    left: 72%;
    position: fixed;
`,
feed_name: `
    padding: 10px;
    display: flex;
    align-items: center;
`,
justify_between: `
    display: flex;
    justify-content: space-between;
`,
flex_center: `
    display: flex;
    justify-content: center;
    align-items: center;
`,
big_profile_box: `
    width: 60px;
    height: 60px;
    border-radius: 70%;
    overflow: hidden;
`,
profile_img: `
    width: 100%;
    height: 100%;
    object-fit: cover;
`,
name_content: `
    display: flex;
    flex-direction: column;
`,
feed_name_txt: `
    font-size: 14px;
    padding: 0px 10px;
    font-weight: bold;
`,
name_content_txt: `
    font-size: 12px;
    padding: 0px 10px;
    font-weight: bold;
    color: lightgray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 190px;
`,
link_txt: `
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`,
recommend_box: `
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    align-items: center;
`,
profile_box: `
    width: 40px;
    height: 40px;
    border-radius: 70%;
    overflow: hidden;
`,
comment_box: `
    margin: 40px 0 0 5px;
    font-size: 12px;
    font-weight: bold;
    color: lightgray;
    display: flex;
    flex-direction: column;
`
};