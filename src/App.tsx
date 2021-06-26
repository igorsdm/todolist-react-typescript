import { GlobalStyle } from './styles/globals';
import { TodoListContext } from './context/ToDoListsContext';

import { TodoList } from './pages/TodoList';

export const App: React.FC = () => {
  return (
    <TodoListContext.Provider value={[]}>
      <TodoList />
      <GlobalStyle />
    </TodoListContext.Provider>
  );
};

export default App;
