import { Box } from '@jag-ui-react/core';
import { Button } from '@jag-ui-react/components';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>&lt;jag-ui /&gt;</h2>
        </header>
        <p className="body">
          <code className="file">packages/example/src/App.js</code>
          <code className="file">packages/core/src/CoreComp1/CoreComp1.js</code>
          <code className="file">packages/components/src/CompOne/CompOne.js</code>
          <code className="file">packages/components/src/CompTwo/CompTwo.js</code>
        </p>
        <div className="components">
          <Box m={3} px={4} py={3} sx={{ display: 'flex', border: '1px solid salmon' }}>
            <Box mx={2} p={3} bg="salmon" color="white">
              Box1
            </Box>
            <Box mx={2} p={3} bg="salmon" color="white">
              Box2
            </Box>
            <Box mx={2} p={3} bg="salmon" color="white">
              Box3
            </Box>
            <Box mx={2} p={3} bg="salmon" color="white">
              Box4
            </Box>
          </Box>
          <Button px={4} py={3} bg="deepskyblue" color="white">
            My Button
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
