import axios from 'axios';

axios.defaults.baseURL = 'https://my.api.mockaroo.com/shipments.json';

export const getData = async () => {
  const response = await axios.get('?key=5e0b62d0');
  return response.data;
};
