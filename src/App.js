import './App.css';
import { NoteProvider } from './context/NoteContext';
import { TodoProvider } from './context/TodoContext';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <TodoProvider>
          <Router></Router>
        </TodoProvider>
      </NoteProvider>
    </div>
  );
}

export default App;
