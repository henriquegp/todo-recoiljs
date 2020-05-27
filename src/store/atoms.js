import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todo/list',
  default: [],
});

export const filterState = atom({
  key: 'todo/filter',
  default: 'ALL',
});
