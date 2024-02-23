import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  headers: {
    'X-Parse-Application-Id': "lbrQhnvkld8gfIs0NPuSuyxis8SjPJo6ztnsN9eF",
    'X-Parse-REST-API-Key': "U9IGOgRvhsCcobk8DBDdN4iNSC8pThsYxTb0fOvt",
    'Content-Type': 'application/json'
  }
});

export default instance;
