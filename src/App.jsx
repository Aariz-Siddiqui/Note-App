import React,{useState} from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
const App =()=>{
  const [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return [...prevData,note];
    })
  }
  const deleteitem=(id)=>{
    setAddItem((oldItems)=>
      oldItems.filter((currdata,indx)=>{
        return indx !==id;
      }) 
    )
  };
  return(
    <>
    <Header/>
    <CreateNote passNote={addNote}/>
    {addItem.map((val,index)=>{
      return (
      <Note 
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      delete={deleteitem}/>
      )
    })}
    <Footer/>
    </>
  )
}
export default App;