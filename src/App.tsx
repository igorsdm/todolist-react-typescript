import { GlobalStyle } from './styles/globals';
import { TodoListProvider } from './context/ToDoListContext';

import { TodoList } from './pages/TodoList';

export const App: React.FC = () => {
  return (
    <TodoListProvider>
      <TodoList />
      <GlobalStyle />
    </TodoListProvider>
  );
};

export default App;
