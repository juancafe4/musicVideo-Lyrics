import React from 'react';
import axios from 'axios'
import $ from 'jquery'
// import cheerio from 'cheerio'
class DisplayVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          songName: "",
          artist: "",
          urlVideo: "",
          lyrics: ""
        }
        console.log('I am in the constructor')
        axios.post('/api/scraper', {songName: 'Red', artist: 'Taylor Swift'})
          .then(res => {
            this.setState({
              songName: res.data.songName,
              artist: res.data.artist,
              urlVideo: res.data.urlVideo,
              lyrics: res.data.lyrics
            })
          })
          .catch(err => {
            console.log(err)
          })
    }
    render() {
        //console.log(this.state)
        let iframe = this.state.urlVideo
        let src = $(iframe).attr('src')

        return (
          <div className="row">
            <div className="col-xs-6">
              <h3>Video Player</h3>
              <iframe   src={src} allowFullScreen="allowFullScreen"></iframe>
            </div>
            <div className="col-xs-6">
              <h3>Lyrics</h3>
              {this.state.lyrics}
            </div>
          </div>        
        )
    }
}

export default DisplayVideo;
