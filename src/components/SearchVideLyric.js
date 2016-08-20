import React from 'react';

import {FormGroup, FormControl, Button} from 'react-bootstrap'

import VideoActions from '../actions/VideoActions'
class SearchVideoLyric extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        songName: "",
        artist: ""
      }
      this.getValidationState = this.getValidationState.bind(this);
      this.changeSong = this.changeSong.bind(this)
      this.changeArtist = this.changeArtist.bind(this)
      this.submit = this.submit.bind(this)
    }

    getValidationState() {
      let {song_name, artist} = this.state;
      if (song_name && artist)
        return 'success';
       else return 'error';
    }
    changeSong(e) {
      this.setState({songName: e.target.value})
    }
    changeArtist(e) {
      this.setState({artist:e.target.value})
    }
    submit(e) {
      e.preventDefault()
      let {songName, artist} = this.state;
      if (songName && artist) {
        //trigger action
        VideoActions.getOneScraper({songName, artist })
        this.setState({
          songName: '',
          artist: '' 
        })
      }
    }
    render() {
        return (  
          <form onSubmit={this.submit}>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            />
            <FormControl
            type="text"
            value={this.state.songName}
            placeholder="Song Name"
            onChange={this.changeSong}
            />
            <FormControl
            type="text"
            value={this.state.artist}
            placeholder="Artist Name"
            onChange={this.changeArtist}
            />
            <Button type="submit" bsStyle="primary">
              <span className="glyphicon glyphicon-search"></span>
            </Button>
          </form>
        )
    }
}

export default SearchVideoLyric;
