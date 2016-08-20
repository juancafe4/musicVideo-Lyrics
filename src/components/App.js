import React from 'react';

import SearchVideLyric from './SearchVideLyric'
import DisplayVideo from './DisplayVideo'
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="container">
            <SearchVideLyric />
            <DisplayVideo />
          </div>
        );
    }
}

export default App;
