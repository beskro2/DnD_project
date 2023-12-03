import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesCard from 'C:/Users/eskro/OneDrive/fall 2023 classes/Human computer interactions/DnD_project/dnd_project/src/components/NotesCard';
import Button from 'react-bootstrap/Button';
import CreateNotes from '../components/CreateNote.js';
import { useState } from 'react';
function NotesPage() {
const [notesarray, setnotesarray]= useState([{date:"1/23/21", name:"Ben Eskro", note:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah"},{date:"1/23/21", name:"Jody Eskro", note:"jody smells"}]);
 const [showNotesForm, setShowNotesForm]= useState(false)
  const updatenotesarray= (date, name, note) => {
  setShowNotesForm(false)
  setnotesarray([...notesarray, {date, name, note}])
  console.log(notesarray)
  }
if(showNotesForm === false){
return  (
   
       <div>
         <Button onClick={()=>setShowNotesForm(true)} >Create new Note</Button> 
         

         {notesarray.map((notes, index) => (
           <NotesCard key={index} note={notes}/>
      ))}
        
        
       </div>
   
  );
}else{
return(
  <CreateNotes create={updatenotesarray}/>
)
}
}
export default NotesPage;
