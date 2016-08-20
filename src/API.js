'use strict';

import axios from 'axios'
// import ServerActions from './actions/ServerActions'

const API = {
  getAllVideos() {
    axios.get('/api/videos')
      .then(res => {
        console.log('res.data:', res.data)
      }
      // .then(ServerActions.receiveVideos)
      .catch(console.error);
  }

  
export default API;
