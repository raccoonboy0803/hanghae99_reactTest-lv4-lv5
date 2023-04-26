import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();
cookie.get('loginCookie');

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}`,
  headers: { authorization: `Bearer ${cookie.get('loginCookie')}` },
});

export default api;
