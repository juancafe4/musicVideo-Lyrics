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
          lyrics: []
        }
        axios.post('/api/scraper', {songName: 'eyes of the insane', artist: 'Slayer'})
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
    
        let textLyrics = this.state.lyrics.map((val, index) => {
          if (val) {
            if (val === 'br')
              return <br key={index} />
            else
              return val
          }
        })
        return (
          <div className="row">
            <div className="col-xs-8">
              <h3>Video Player</h3>
              <iframe width="600"  height="600" src={src + '?autoplay=1'} frameBorder={0} allowFullScreen="allowFullScreen"></iframe>
            </div>
            <div className="col-xs-4">
              <h3>Lyrics</h3>
              <div>
                {textLyrics}
              </div>
            </div>
          </div>        
        )
    }
}

export default DisplayVideo;
