import { StaticNotesData } from "./StaticNotesData";
import SingleNote from "./SingleNote";

export default function DeletedNotes(){
    var ShowDeletedNotes=[];

    for(let i=0;i<StaticNotesData.length;i++)
    {
        if(StaticNotesData[i].delete==1)
        {
            ShowDeletedNotes.push(StaticNotesData[i]);
        }
    }
    console.log(ShowDeletedNotes)

    return(
        <div>
            <p>This will show list of deleted notes</p>
            <div className="deleted-notes-list">
                {ShowDeletedNotes.map((Notes,index)=>{ return(<SingleNote Notes={Notes} key={index} active={false}/>);})}
                
            </div>
        </div>
    );
}