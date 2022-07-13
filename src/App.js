
import './App.css';
import ToDoInputBox from './ToDoInputBox';
import ActiveNotes from './ActiveNotes';
import DeletedNotes from './DeletedNotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's note down everything</h2>
      </header>
      <div>
     
        <ToDoInputBox/>
      </div>
      <hr></hr>
      <div>
      
        <ActiveNotes />
      </div>
      <hr></hr>
      <div>
      
        <DeletedNotes />
      </div>
    </div>
  );
}

export default App;
