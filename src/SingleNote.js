import './SingleNote.css';

export default function SingleNote(props){


    function DeleteHandler(id){
        props.ActiveDeleteHandler(id);

    }

    return(
        <div className='main'>
        <div className="SingleNote-main">
            <p>This is Single note section</p>
            <div>
                <p>{props.Notes.content}</p>
            </div>
            {props.active? <span><button onClick={()=>{DeleteHandler(props.Notes.id)}}>Delete</button></span>: <span><button >Recover</button><button>Delete</button></span>}    
            
        </div>
        </div>
    );
}