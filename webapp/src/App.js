import React from 'react';

import './App.css';
import Upload from './Upload'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <header rel="stylesheet">
        <Header />
      </header>
      <body>
        <div className="box">
          <Upload />
        </div>
      </body>
    </div>
  );
}

export default App;
