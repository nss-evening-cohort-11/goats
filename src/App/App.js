import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

class App extends React.Component {
  // outside render - anything that modifies state

  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats', goats);
  }

  render() {
    // inside the render - anything we need to do to modify the UI
    return (
      <div className="App">
        <h2 className='goat-title'>Goats</h2>
        <button className="btn btn-success"><i className="fas fa-tree fa-3x"></i></button>
      </div>
    );
  }
}

export default App;
