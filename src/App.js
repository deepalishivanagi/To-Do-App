
import './App.css';
import ToDoInputBox from './ToDoInputBox';
import ActiveNotes from './ActiveNotes';
import DeletedNotes from './DeletedNotes';
import { useState } from 'react';
import { StaticNotesData } from './StaticNotesData';

function App() {

  const [NotesTakenArray,setNotesTakenArray]=useState(StaticNotesData);
  const [id,setid]=useState(3);

  function AddtoNotesArray(message){
    var TempArray=JSON.parse(JSON.stringify(NotesTakenArray));
    var Tempid=id+1;
    TempArray.push({content:message,recover:1,delete:0,id:Tempid});
    setNotesTakenArray(TempArray);
    setid(Tempid);
  }

  function ActiveDeleteHandler(id){
    var TempArray=JSON.parse(JSON.stringify(NotesTakenArray));
    for(let i=0;i<NotesTakenArray.length;i++)
    {
      if(NotesTakenArray[i].id==id)
      {
        TempArray[i].delete=1;
        TempArray[i].recover=0;
        break;
      }
    }
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
        <ActiveNotes NotesTakenArray={NotesTakenArray} ActiveDeleteHandler={ActiveDeleteHandler}/>
      </div>
      <hr></hr>
      <div>    
        <DeletedNotes NotesTakenArray={NotesTakenArray}/>
      </div>
    </div>
  );
}

export default App;
