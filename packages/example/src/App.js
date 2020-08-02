import { CoreComp1 } from '@jag-ui-react/core';
import { CompOne, CompTwo } from '@jag-ui-react/components';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>&lt;jag-ui /&gt;</h2>
          <p className="body">
            <code className="file">packages/example/src/App.js</code>
            <code className="file">packages/core/src/CoreComp1/CoreComp1.js</code>
            <code className="file">packages/components/src/CompOne/CompOne.js</code>
            <code className="file">packages/components/src/CompTwo/CompTwo.js</code>
          </p>
          <div className="components">
            <CoreComp1 />
            <CompOne />
            <CompTwo />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
