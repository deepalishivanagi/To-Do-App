import './SingleNote.css';

export default function SingleNote(props){

    return(
        <div className='main'>
        <div className="SingleNote-main">
            <p>This is Single note section</p>
            <div>
                <p>{props.Notes.content}</p>
            </div>
            {props.active? <span><button>Recover</button><button>Delete</button></span>:<span><button>Delete</button></span>}    
            
        </div>
        </div>
    );
}