import axios from 'axios';

axios.defaults.baseURL = 'https://api.nytimes.com/svc/topstories/v2';
const API_KEY = 'ai892Aao64TMeZOgTj6Bbw8g6062KVFI';

export const getTopNews = async () => {
  try {
    const data = await axios.get(`/arts.json?api-key=${API_KEY}`);
    console.log('DATA', data);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no articles');
  }
};
