
import './App.css';
import ToDoInputBox from './ToDoInputBox';
import ActiveNotes from './ActiveNotes';
import DeletedNotes from './DeletedNotes';
import { useState } from 'react';

function App() {

  const [NotesTakenArray,setNotesTakenArray]=useState([]);

  function AddtoNotesArray(message){
    var TempArray=JSON.parse(JSON.stringify(NotesTakenArray));
    TempArray.push({content:message});
    console.log(TempArray);
    setNotesTakenArray(TempArray);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's note down everything</h2>
      </header>
      <div>
     
        <ToDoInputBox  AddtoNotesArray={AddtoNotesArray}/>
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
