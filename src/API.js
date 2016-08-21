import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllVideos() {
    axios.get('/api/videos')
    .then(res => res.data)
    .then(ServerActions.receiveVideos)
    .catch(console.error);
  },
  getOneVideo(id) {
    axios.get('/api/videos/:id')
    .then(res => res.data)
    .then(ServerActions.getOneVideo)
    .catch(console.error)
  },
  createVideo(video) {
    axios.post('/api/videos', video)
    .then(res => res.data)
    .then(ServerActions.receiveOneVideo)
    .catch(console.error);
  },
  deleteVideo(id) {
    axios.delete('/api/videos/:id')
    .then(res => res.data)
    .then(ServerActions.deleteVideo)
    .catch(console.error);
  },
  getOneScraper(obj) {
    axios.post('/api/scraper', obj)
    .then(res => res.data)
    .then(ServerActions.getOneScraper)
    .catch(console.error)
  },
  getScrapers(obj) {
    axios.post('/api/scraper/links', obj)
    .then(res => res.data)
    .then(ServerActions.getScrapers)
    .catch(console.error)
  }
}

export default API;

// axios.get('/user?ID=12345')
