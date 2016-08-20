import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid';

let _videos = [];

class VideoStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.reqister(action => {
      switch(action.type) {
        
        case 'RECEIVE_VIDEOS':
        _videos = action.videos;
        this.emit("CHANGE");
        break;

        case 'RECEIVE_ONE_VIDEO':
        var { video } = action;
        this.emit("CHANGE");
        break;

        case 'CREATE_VIDEO':
        var { video } = action;
        video._id = uuid();
        _video.push(video);
        this.emit("CHANGE");
        break;

        case 'DELETE_VIDEO':
        var { video } = action;
        this._videos = this._videos.filter(i => i._id !== video._id);
        this.emit("CHANGE");
        break;

        case 'GET_ONE_SCRAPER':
        var { video } = action;
        this.emit("CHANGE");
        break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _videos;
  }
}

export default new VideoStore();