import React from 'react';
import { RecoilRoot } from 'recoil';

import Todo from './components/Todo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

import './styles/global.scss';

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <div className="content">
          <Todo />
          <TodoList />
          <Filter />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
