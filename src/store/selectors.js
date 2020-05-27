import { selector } from 'recoil';

import { filterState, todoListState } from './atoms';

export const filteredTodoListState = selector({
  key: 'todo/filteredList',
  get: ({ get }) => {
    const filter = get(filterState);
    const todoList = get(todoListState);

    if (filter === 'ALL') {
      return todoList;
    }

    const isCompleted = filter === 'COMPLETED';

    return todoList.filter((todo) => todo.done === isCompleted);
  },
});

export const lengthActiveTodoState = selector({
  key: 'todo/lengthActiveTodo',
  get: ({ get }) => {
    const todoList = get(todoListState);

    return todoList.filter((todo) => todo.done === false).length;
  },
});
