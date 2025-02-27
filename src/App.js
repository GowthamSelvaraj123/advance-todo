import './App.css';
import { NoteProvider } from './context/NoteContext';
import { TodoProvider } from './context/TodoContext';
import UserProvider from './context/UserContext';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NoteProvider>
          <TodoProvider>
            <Router></Router>
          </TodoProvider>
        </NoteProvider>
      </UserProvider>
    </div>
  );
}

export default App;
