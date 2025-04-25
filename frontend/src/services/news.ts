import axios from 'axios';

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchTopNews = async (country = 'us') => {
  const response = await axios.get(BASE_URL, {
    params: {
      country,
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};
