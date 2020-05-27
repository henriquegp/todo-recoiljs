import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import './styles.scss';

import { todoListState } from '../../store/atoms';

function Todo() {
  const [todo, setTodo] = useState('');
  const setTodoListState = useSetRecoilState(todoListState);

  function handleSubmit(event) {
    event.preventDefault();
    setTodoListState((todoList) => [
      ...todoList,
      {
        id: todoList.length + 1,
        todo,
        done: false,
      },
    ]);
    setTodo('');
  }

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To do"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="underline" />
      </form>
    </div>
  );
}

export default Todo;
