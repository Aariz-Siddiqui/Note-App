import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote=(props)=>{
    const [note , setNote]=useState({
        title:"",
        content:""
    });
const [expand,setExpand]=useState(false);        
const InputEvent=(event)=>{
const {name,value}=event.target;
setNote((prevData)=>{
    return({
        ...prevData,
        [name]:value,
    })
})
}
const addEvent=()=>{
    props.passNote(note);
    setNote( 
    {title:"",
    content:""})
}
const expandit =()=>{
    setExpand(true);
}
const shrink =()=>{
    setExpand(false)
}
    return(
        <>
        <div className="main_note" onDoubleClick={shrink}>
         <form>
           {expand?
           <input type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}  
            placeholder="Title" 
            autoComplete="off" 
            /> : null}
            <textarea 
            rows="" 
            column="" 
            name="content"
            value={note.content}
            placeholder="Write a note....." 
            onChange={InputEvent}
            onClick={expandit}
            ></textarea>
            {expand?
            <Button onClick={addEvent}> 
                <AddIcon className="plus_sign"/>
            </Button>
            :null}
         </form>    
        </div>
        </>
    )
}
export default CreateNote;