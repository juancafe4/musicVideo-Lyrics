import React from 'react';

import {FormGroup, FormControl, Button} from 'react-bootstrap'
class SearchVideoLyric extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        song_name: "",
        artist: ""
      }
      this.getValidationState = this.getValidationState.bind(this);
      this.changeSong = this.changeSong.bind(this)
      this.changeArtist = this.changeArtist.bind(this)
      this.submit = this.submit.bind(this)
    }

    getValidationState() {
      let {song_name, artist} = this.state;
      console.log(song_name)
      if (song_name && artist)
        return 'success';
       else return 'error';
    }
    changeSong(e) {
      this.setState({song_name: e.target.value})
    }
    changeArtist(e) {
      this.setState({artist:e.target.value})
    }
    submit(e) {
      e.preventDefault()
      let {song_name, artist} = this.state;
      if (song_name && artist) {
        alert('Search works')
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
            value={this.state.song_name}
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
