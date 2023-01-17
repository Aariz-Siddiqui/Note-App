import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note=(props)=>{
    const deletenote=()=>{
        props.delete(props.id);
    }
    return(
        <>
        <div className="note">
           <h1>{props.title}</h1>
           <br/>
           <p>{props.content}</p>
           <button className="btn">
           <DeleteOutlineIcon className="deleteIcon" onClick={deletenote}/>
            </button>
            </div>
        </>
    )
}
export default Note;