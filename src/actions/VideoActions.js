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
  getOneScraper(id) {
    API.getOneScraper(id);
  }
}

export default VideoActions
