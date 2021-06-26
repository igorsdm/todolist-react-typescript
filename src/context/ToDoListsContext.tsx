import { useState, createContext, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface List {
  id: string;
  name: string;
  description: string;
  done: boolean;
}

interface ListProvider {
  children: ReactNode;
}

interface ListContextProvider {
  list: List[];
  addNewTodoItem: (istItem: newListInput) => void;
}

type newListInput = Omit<List, 'id' | 'done'>;

export const TodoListContext = createContext<ListContextProvider>(
  {} as ListContextProvider,
);

export const TodoListProvider: React.FC = ({ children }: ListProvider) => {
  const [list, setList] = useState<List[]>(() => {
    const toDoList = localStorage.getItem('list');

    return JSON.parse(toDoList) || [];
  });

  const addNewTodoItem = (listItem: newListInput): void => {
    const { name, description } = listItem;

    const newListItem = {
      id: uuidv4(),
      name,
      description,
      done: false,
    };

    const toDoList = JSON.parse(localStorage.getItem('list'));

    if (!toDoList) {
      localStorage.setItem('list', JSON.stringify([newListItem]));
      setList([newListItem]);
    } else {
      toDoList.push(newListItem);
      setList(toDoList);
      localStorage.setItem('list', JSON.stringify(toDoList));
    }
  };

  return (
    <TodoListContext.Provider value={{ list, addNewTodoItem }}>
      {children}
    </TodoListContext.Provider>
  );
};
