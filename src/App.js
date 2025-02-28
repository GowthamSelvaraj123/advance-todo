import './App.css';
import LoginProvider from './context/LoginContext';
import { NoteProvider } from './context/NoteContext';
import { TodoProvider } from './context/TodoContext';
import UserProvider from './context/UserContext';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <LoginProvider>
      <UserProvider>
        <NoteProvider>
          <TodoProvider>
            <Router></Router>
          </TodoProvider>
        </NoteProvider>
      </UserProvider>
    </LoginProvider>
    </div>
  );
}

export default App;
