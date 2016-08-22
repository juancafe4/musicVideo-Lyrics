import React from 'react';


import SearchVideLyric from './SearchVideLyric'
import DisplayResults from './DisplayResults'
class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <div className="container">
            <SearchVideLyric />
            <DisplayResults />
          </div>
        );
    }
}

export default App;
