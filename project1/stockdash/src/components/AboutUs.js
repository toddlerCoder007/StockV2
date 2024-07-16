import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div>
      <div className={styles.newsHeader}>News</div>
      <p className={styles.newsSubheader}>Get the latest news on your bookmarked stocks here!</p>
      <button className={styles.button}>General News</button>
      <div className="news-container">
        <div className="news-article">
          <h2 className="news-title">Title: </h2>
          <p className="news-summary">Summary</p>
          <p className="news-source">Source: </p>
          <p className="news-date">Published on: </p>
        </div>
      </div>
    </div>
  )};
 

export default AboutUs;
