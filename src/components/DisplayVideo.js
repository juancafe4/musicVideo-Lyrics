import React from 'react';
import axios from 'axios'
import $ from 'jquery'
import VideoStore from '../stores/VideoStore'
import VideoActions from '../actions/VideoActions'
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
      VideoActions.getOneScraper();
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
      
          let textLyrics = this.state.videos.lyrics.map((val, index) => {
            if (val) {
              if (val === 'br')
                return <br key={index} />
              else
                return val
            }
          });
          return (
            <div className="row">
              <div className="col-xs-8">
                <h3>Video Player</h3>
                 <iframe width="600"  height="600" src={src + '?autoplay=1'} frameBorder={0} allowFullScreen="allowFullScreen"></iframe>
              </div>
              <div className="col-xs-4">
                <h3>Lyrics</h3>
                {textLyrics}
                <div>
                  
                </div>
              </div>

           </div>
                  
          )
      }
      else
        return <div></div>
    }
}

export default DisplayVideo;
