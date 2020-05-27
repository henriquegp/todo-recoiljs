import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import './styles.scss';

import { todoListState } from '../../store/atoms';
import { filteredTodoListState } from '../../store/selectors';

function TodoList() {
  const setTodoListState = useSetRecoilState(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  function handleCompleted(id) {
    setTodoListState((todoList) => todoList.map(
      (todo) => (todo.id === id
        ? { ...todo, done: !todo.done }
        : todo),
    ));
  }

  function handleRemove(id) {
    setTodoListState(
      (todoList) => todoList.filter((todo) => todo.id !== id),
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodoList.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.done}
            onChange={() => handleCompleted(todo.id)}
          />
          <div className={`text ${todo.done && 'completed'}`}>
            {todo.todo}
          </div>
          <button
            type="button"
            label="remove"
            className="remove"
            onClick={() => handleRemove(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
