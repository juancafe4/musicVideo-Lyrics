import React from 'react';

class DisplayVideo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="row">
            <div className="col-xs-6">
              <h3>Video Player</h3>
            </div>
            <div className="col-xs-6">
              <h3>Lyrics</h3>
            </div>
          </div>        

        )
    }
}

export default DisplayVideo;
