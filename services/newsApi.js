import axios from 'axios';

export const options = {
  method: 'GET',
  url: 'https://makeup.p.rapidapi.com/products.json',

  headers: {
    'X-RapidAPI-Key': '3daf212acdmsh0ee9f773f903ad3p162c34jsnba05117b8383',
    'X-RapidAPI-Host': 'makeup.p.rapidapi.com',
  },
};

export const optionsDetails = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3daf212acdmsh0ee9f773f903ad3p162c34jsnba05117b8383',
    'X-RapidAPI-Host': 'makeup.p.rapidapi.com',
  },
};

// without id (((( but on future stay here

// const BASE_URL = 'https://api.nytimes.com/svc/books/v3';
//const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';
//const API_KEY = 'ai892Aao64TMeZOgTj6Bbw8g6062KVFI';
// const API_KEY = 'wqrlGwGqJmQ5K70n1jywdvO13fCXz5S9';

// export const getTopNews = () => {
//   return fetch(`${BASE_URL}/search?q=Ukraine&page_size=1&api-key=${API_KEY}`).then((response) => {
//     if (response.status === 404) {
//       throw new Error(response.status);
//     }
//     console.log(response.json());
//     return response.json();
//   });
// };
// export const getTopNewsById = (id) => {
//   return fetch(`${BASE_URL}/lists/full-overview.json?api-key=${API_KEY}&id=${id}`).then(
//     (response) => {
//       if (response.status === 404) {
//         throw new Error(response.status);
//       }
//       console.log(response.json());
//       return response.json();
//     }
//   );
// };

// export const getTopNews = () => {
//   return fetch(`${BASE_URL}/arts.json?api-key=${API_KEY}`).then((response) => {
//     if (response.status === 404) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };
