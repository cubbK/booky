import * as React from 'react';
import { Router } from "@reach/router";
import { HomePage } from './pages/HomePage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HomePage path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
