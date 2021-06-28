import { useState, createContext, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { findIndex } from 'lodash';

import { IList } from '../interfaces/List';

interface ListProvider {
  children: ReactNode;
}

interface ListContextProvider {
  list: IList[];
  addToDoItem: (listItem: newListInput) => void;
  changeStatus: (listItem: IList) => void;
  deleteToDoList: (listItem: IList) => void;
  editToDoItem: (listItem: editListInput) => void;
}

type newListInput = Omit<IList, 'id' | 'done'>;

type editListInput = Omit<IList, 'done'>;

export const TodoListContext = createContext<ListContextProvider>(
  {} as ListContextProvider,
);

export const TodoListProvider: React.FC = ({ children }: ListProvider) => {
  const [list, setList] = useState<IList[]>(() => {
    const toDoList = localStorage.getItem('list');

    return JSON.parse(toDoList) || [];
  });

  const addToDoItem = (listItem: newListInput): void => {
    const { name, description } = listItem;

    const newListItem = {
      id: uuidv4(),
      name,
      description,
      done: false,
    };

    const toDoList: IList[] = list.slice();

    if (!toDoList) {
      localStorage.setItem('list', JSON.stringify([newListItem]));
      setList([newListItem]);
    } else {
      toDoList.push(newListItem);
      setList(toDoList);
      localStorage.setItem('list', JSON.stringify(toDoList));
    }
  };

  const changeStatus = (listItem: IList): void => {
    const { id } = listItem;

    const toDoList: IList[] = list.slice();

    const index = findIndex(toDoList, item => item.id === id);

    toDoList[index].done = !toDoList[index].done;

    setList(toDoList);
    localStorage.setItem('list', JSON.stringify(toDoList));
  };

  const deleteToDoList = (listItem: IList): void => {
    const { id } = listItem;

    const toDoList: IList[] = list.slice();

    const index = findIndex(toDoList, item => item.id === id);

    toDoList.splice(index, 1);

    setList(toDoList);
    localStorage.setItem('list', JSON.stringify(toDoList));
  };

  const editToDoItem = (listItem: editListInput): void => {
    const { id, name, description } = listItem;

    const toDoList: IList[] = list.slice();

    const index = findIndex(toDoList, item => item.id === id);

    toDoList[index] = { id, name, description, done: false };

    setList(toDoList);
    localStorage.setItem('list', JSON.stringify(toDoList));
  };

  return (
    <TodoListContext.Provider
      value={{ list, addToDoItem, changeStatus, deleteToDoList, editToDoItem }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
