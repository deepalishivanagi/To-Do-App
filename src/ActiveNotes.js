import { StaticNotesData } from "./StaticNotesData";
import SingleNote from "./SingleNote";
import './ActiveNote.css';

export default function ActiveNotes(props)
{
    var ShowActiveNotes=[];

    for(let j=0;j<props.NotesTakenArray.length;j++)
    {
        if(props.NotesTakenArray[j].recover==1)
        {
            ShowActiveNotes.push(props.NotesTakenArray[j]);
        }
    }
    console.log(ShowActiveNotes);

    return(
        <div>
            <p>This will show list of active notes</p>
            <div className="Active-notes-list">
                {ShowActiveNotes.map((Notes,index)=>{ return(<SingleNote Notes={Notes} key={index} active={true} ActiveDeleteHandler={props.ActiveDeleteHandler}/>);})}
                
            </div>

        </div>
    );
}