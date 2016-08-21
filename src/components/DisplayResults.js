import {Table} from 'react-bootstrap'
import VideoActions from '../actions/VideoActions'
import VideoStore from '../stores/VideoStore'
import OpenResult from './OpenResult'
import React from 'react';
import uuid from 'uuid'
class DisplayResults extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        showModal: false,
        actualResult: {},
      }
      this._onChange = this._onChange.bind(this);
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
    }

    componentDidMount() {
      VideoActions.getScrapers();
      VideoStore.startListening(this._onChange);
    }

    close() {
      this.setState({ showModal: false});
    }

    open(result) {
      this.setState({ showModal: true, actualResult: result});
    }
    componentWillUnMount() {
      VideoStore.stopListening(this._onChange);
    }
    _onChange() {
      this.setState({
        results: VideoStore.getLinks()
      });
    }
    render() {
        
        if (this.state.results.length !== 0) {
          let trs = this.state.results.map((val ,index) => {        
            
            return (
              <tr onClick={this.open.bind(null, val)} key={index + 1}>
                <td>{val.songName}</td>
                <td>{val.artist}</td>
                <td>{val.url}</td>
              </tr>      
            )
          });
          return (
            <div>         
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Song Name</th>
                    <th>Artist</th>
                    <th>URL</th>
                  </tr>
                </thead>

                <tbody>
                    {trs}
                </tbody>
              </Table>

              <OpenResult result={this.state.actualResult}show={this.state.showModal} onHide={this.close}/>
            </div>
          )   
        }
        else return <div></div>
    }
}

export default DisplayResults;
