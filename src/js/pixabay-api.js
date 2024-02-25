'use strict';
import axios from 'axios';

export async function searchImages(searchTerm, page, perPage) {
  axios.defaults.baseURL = 'https://pixabay.com';
  const END_POINT = '/api';
  const resp = await axios.get(END_POINT, {
    params: {
      key: '21768935-3fedd5c602a3f7ac5e18d4c15',
      q: `${searchTerm}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${page}`,
      per_page: `${perPage}`,
    },
  });
  return resp;
}
