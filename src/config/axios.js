import axios from 'axios'
import VueCookie from 'vue-cookie'

// axios.defaults.baseURL = 'http://35.198.166.19:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

if (VueCookie.get('user_token'))
  axios.defaults.headers.common['Authorization'] = 'Token '+VueCookie.get('user_token');

export default axios;
