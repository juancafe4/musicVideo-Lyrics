import React from 'react';
import axios from 'axios'
import $ from 'jquery'
import VideoStore from '../stores/VideoStore'
import VideoActions from '../actions/VideoActions'
import {ProgressBar} from 'react-bootstrap'
// import cheerio from 'cheerio'
class DisplayVideo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          vidoes: VideoStore.getMusicAndLyrics()
        }

        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
      VideoActions.getOneScraper(this.props.result);
      VideoStore.startListening(this._onChange);
    }

    componentWillUnMount() {
      VideoStore.stopListening(this._onChange);
    }
    _onChange() {
      this.setState({
        videos: VideoStore.getMusicAndLyrics()
      });
    }
    render() {
        if (this.state.videos) {

          console.log(this.state)
          let iframe = this.state.videos.urlVideo
          let src = $(iframe).attr('src')

          let textLyrics1 = this.state.videos.lyrics.map((val, index) => {
            if (this.state.videos.lyrics.length / 2 < index && val) {
              if (val === 'br')
                return <br key={index} />
              else
                return val
            }
          });
          let textLyrics2 = this.state.videos.lyrics.map((val, index) => {
            if (this.state.videos.lyrics.length / 2 >= index && val) {
              if (val === 'br')
                return <br key={index} />
              else
                return val
            }
          });
          return (
            <div className="row">
              <div className="col-xs-6">
                <h3>Video Player</h3>
                 <iframe width="550"  height="550" src={src + '?autoplay=1'} frameBorder={0} allowFullScreen="allowFullScreen"></iframe>
              </div>
              <div className="col-xs-3">
                <h3>Lyrics</h3>
                {textLyrics1}
              </div>
              <div className="col-xs-3">
                {textLyrics2}
              </div>
           </div>

          )
      }
      else
        return <ProgressBar active now={45} />
    }
}

export default DisplayVideo;
