import React, { useState } from 'react';
import styles from './AboutUs.module.css';
import NewsTable from './newsTable';
// import { dummyNewsData } from './dummyNewsData';
import getNews from '../api/getNews';
import { finNews } from '../dummyData/getFinNews';
import InputStock from './InputStock';
import { stockNews } from '../dummyData/stockNews';

const AboutUs = () => {
  // const dummyNews = dummyNewsData.feed;
  const dummyNews = finNews.feed;
  const aaplNews = stockNews.feed;
  // console.log(typeof dummyNews);
  const [newsData, setNewsData] = useState(dummyNews);
  const [stockName, setStockName] = useState();
  const [newsIsLoading, setNewsIsLoading] = useState(true);
  const [newsHeaderTitle, setNewsHeaderTitle] = useState("");
  const [sentimentScore, setSentimentScore] = useState(0);

  const newsResponse = async () => {
    setNewsHeaderTitle("General News");
    try {
      setNewsIsLoading(true);
      //const response = await getNews.get("/query?function=NEWS_SENTIMENT&apikey=Y3TOA81O8IORQRMM");
      // const response = await getNews.get("/query?function=NEWS_SENTIMENT&topics=financial_markets,&apikey=Y3TOA81O8IORQRMM");
      const response = await getNews.get("/query");
      if (response.data && response.data.feed) {
        console.log("✔ News:", response.data.feed);
        setNewsData(response.data.feed);
      } else {
        console.log("❌ News: No feed data found, using dummy news");
        window.alert("API Request failed, displaying pre-loaded data");
        setNewsData(dummyNews);
      }
    } catch (error) {
      console.error("🚨 error:", error.message);
      setNewsData(dummyNews);
    } finally {
      setNewsIsLoading(false);
    }
  };
  const newsFinResponse = async () => {
    setNewsHeaderTitle(`${stockName} News`);
    try {
      setNewsIsLoading(true);
      const response = await getNews.get(`/query?function=NEWS_SENTIMENT&tickers=${stockName}&apikey=Y3TOA81O8IORQRMM`);
      // const response = await getNews.get("/query");
      // const response = await getNews.get("/query");
      if (response.data && response.data.feed) {
        console.log("✔ News:", response.data.feed);
        setNewsData(response.data.feed);
      } else {
        console.log("❌ News: No feed data found, using dummy news");
        window.alert("API Request failed, no pre-loaded data");
        setNewsData(aaplNews);
      }
      setSentimentScore(()=>{
        let score = 0;
        newsData.forEach((news) => {
          const aaplSentiment = news.ticker_sentiment.find(sentiment => sentiment.ticker === "AAPL");
          if (aaplSentiment) {
            // Convert ticker_sentiment_score to a number and add to score
            console.log("score", score);
            score = score + parseFloat(aaplSentiment.ticker_sentiment_score);
          }
        });
        return score;
      });
    } catch (error) {
      console.error("🚨 error:", error.message);
      setNewsData(aaplNews);
      setSentimentScore(()=>{
        let score = 0;
        aaplNews.feed.forEach((news) => {
          const aaplSentiment = news.ticker_sentiment.find(sentiment => sentiment.ticker === "AAPL");
          if (aaplSentiment) {
            // Convert ticker_sentiment_score to a number and add to score
            console.log("score", score);
            score = score + parseFloat(aaplSentiment.ticker_sentiment_score);
          }
        });
        return score;
      });
    } finally {
      setNewsIsLoading(false);
    }
  };
  // const newsEcnResponse = async () => {
  //   setNewsHeaderTitle("Macro Economy News");
  //   try {
  //     setNewsIsLoading(true);
  //     const response = await getNews.get("/query?function=NEWS_SENTIMENT&topics=economy_macro&apikey=Y3TOA81O8IORQRMM");
  //     // const response = await getNews.get("/query");
  //     if (response.data && response.data.feed) {
  //       console.log("✔ News:", response.data.feed);
  //       setNewsData(response.data.feed);
  //     } else {
  //       console.log("❌ News: No feed data found, using dummy news");
  //       window.alert("API Request failed, no pre-loaded data");
  //       setNewsData(dummyNews);
  //     }
  //   } catch (error) {
  //     console.error("🚨 error:", error.message);
  //     setNewsData(dummyNews);
  //   } finally {
  //     setNewsIsLoading(false);
  //   }
  // };
  // const getdummyNews = () => {
  //   console.log('Button clicked');
  //   setNewsData(dummyNews);
  //   console.log('Object from parent component: ', newsData);
  // }
  return (
    <div>
      <div className={styles.newsHeader}>News</div>
      <p className={styles.newsSubheader}>Get the latest news on your bookmarked stocks here!</p>
      <button className={styles.button} onClick={newsResponse}>General News</button>
      <button className={styles.button} >Financial News</button>
      <InputStock stockName={stockName} setStockName={setStockName} newsFinResponse={newsFinResponse} sentimentScore={sentimentScore}/>
      {/* <button className={styles.button} onClick={newsEcnResponse}>Macro Economy News</button> */}
      {!newsIsLoading && <NewsTable newsData={newsData} newsHeaderTitle={newsHeaderTitle}/>}
    </div>
  )};
 

export default AboutUs;
