import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './component/Board';
import BoardItem from './component/BoardItem';

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Board}></Route>
      <Route path="/:boardId" component={BoardItem}></Route>
    </Router>
  );
}

export default App;
