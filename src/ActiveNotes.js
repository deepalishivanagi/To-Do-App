import { StaticNotesData } from "./StaticNotesData";
import SingleNote from "./SingleNote";
import './ActiveNote.css';
export default function ActiveNotes()
{
    var ShowActiveNotes=[];

    for(let i=0;i<StaticNotesData.length;i++)
    {
        if(StaticNotesData[i].recover==1)
        {
            ShowActiveNotes.push(StaticNotesData[i]);
        }
    }
    console.log(ShowActiveNotes)

    return(
        <div>
            <p>This will show list of active notes</p>
            <div className="Active-notes-list">
                {ShowActiveNotes.map((Notes,index)=>{ return(<SingleNote Notes={Notes} key={index} active={true}/>);})}
                
            </div>

        </div>
    );
}