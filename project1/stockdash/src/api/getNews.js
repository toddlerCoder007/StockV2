import axios from "axios";

const baseURL = "https://www.alphavantage.co";

const getNews = axios.create({ 
    baseURL:baseURL
});
 
export default getNews;
