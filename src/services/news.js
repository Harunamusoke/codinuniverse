import axios from "axios";

const apiUrl =
  "http://newsapi.org/v2/everything?q=programming&sortBy=popularity&apiKey=5258d9cebfd24741a0572d7e6fbf65b2&page=";

const getPosts = (page) => axios.get(apiUrl + page);
export default getPosts;
