import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './component/Board';

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Board}></Route>
    </Router>
  );
}

export default App;
