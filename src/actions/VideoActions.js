import API from '../API'

const VideoActions = {
  getAllVideos: API.getAllVideos,

  getOneVideo(id) {
    API.getOneVideo(id);
  },
  createVideo(video) {
    API.createVideo(video);
  },
  deleteVideo(id) {
    API.deleteVideo(id);
  },
  getOneScraper(obj) {
    API.getOneScraper(obj);
  }
}

export default VideoActions
