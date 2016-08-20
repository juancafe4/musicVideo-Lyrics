import {DropdownButton, MenuItem} from 'react-bootstrap'

import React from 'react';

class DisplayResults extends React.Component {
    constructor(props) {
        super(props);
  
    }
    render() {
        return (
        <div>
            <h3>
              Name: Song Name: url
              <DropdownButton title=":" id="bg-vertical-dropdown-1">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
              </DropdownButton>
            </h3>
        </div>
      )
    }
}

export default DisplayResults;
