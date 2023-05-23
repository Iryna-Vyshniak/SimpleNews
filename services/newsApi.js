const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';
const API_KEY = 'ai892Aao64TMeZOgTj6Bbw8g6062KVFI';

export const getTopNews = () => {
  return fetch(`${BASE_URL}/arts.json?api-key=${API_KEY}`).then((response) => {
    if (response.status === 404) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
