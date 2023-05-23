import axios from 'axios';

axios.defaults.baseURL = 'https://api.nytimes.com/svc/topstories/v2';

axios.defaults.params = {
  api_key: `ai892Aao64TMeZOgTj6Bbw8g6062KVFI`,
};

export const getTopNews = async () => {
  try {
    const { data } = await axios.get('/arts.json');
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no articles');
  }
};
