import axios from 'axios';

export async function searchImages(searchTerm, page, perPage) {
  axios.defaults.baseURL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY = '42535847-effe6d5cdde3e67806355c12e&q';
  const IMG_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const PARAMS = `?key=${KEY}&q=${searchTerm}&image_type=${IMG_TYPE}&orientation=${ORIENTATION}&safesearch=true&page=${page}&per_page=${perPage}`;
  const resp = await axios.get(END_POINT + PARAMS);
  return resp;
}
