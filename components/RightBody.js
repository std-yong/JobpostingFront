import React, { useState, useEffect } from "react";
import styles from "../styles/RightBody.module.css";
import BootstrapHead from "./BootstrapHead";
import { getContent } from "../pages/api";

function daysRemaining(endDate) {
  const today = new Date();
  const end = new Date(endDate);
  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function RightBody() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContent();
      const filteredData = data.filter(
        (job) => daysRemaining(job.end_date) > 0
      );
      filteredData.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
      setJobData(filteredData.slice(0, 4));
    };
    fetchData();
  }, []);

  return (
    <>
      <BootstrapHead />
      <div className={styles.right_body}>
        {jobData.map((job, index) => (
          <div key={job.id} className={styles.feed_name}>
            <div className={styles.flex_center}>
              <div
                className={index === 0 ? styles.big_profile_box : styles.profile_box}
              >
                <img className={styles.profile_img} src={job.company_image_url} />
              </div>
              <div className={styles.name_content}>
                <span className={styles.feed_name_txt}>{job.company_name}</span>
                <span className={styles.name_content_txt}>{job.job_description}</span>
              </div>
            </div>
            <a className={styles.link_txt}>D-{daysRemaining(job.end_date)}</a>
          </div>
        ))}
      </div>
    </>
  );
}
