import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesCard from 'C:/Users/eskro/OneDrive/fall 2023 classes/Human computer interactions/DnD_project/dnd_project/src/components/NotesCard';
import Button from 'react-bootstrap/Button';
import CreateNotes from '../components/CreateNote.js';
import { useState } from 'react';
function NotesPage() {
const [notesarray, setnotesarray]= useState([{date:"1/23/21", name:"Ben Eskro", note:"Our campain begain in the town of trut.The party got in a bar fight was was given a quest by the town mayor as conunity. The party needs to hand the villages local goblin problem. The goblins have bin stealing their sheep."},{date:"1/28/21", name:"Jody Eskro", note:"our party accidentally came across a local goblin campfire. after some untastful convincing by the barbarian the goblin revieled there lair and the location of the missing sheep "}]);
 const [showNotesForm, setShowNotesForm]= useState(false)
  const updatenotesarray= (date, name, note) => {
  setShowNotesForm(false)
  setnotesarray([...notesarray, {date, name, note}])
  console.log(notesarray)
  }
if(showNotesForm === false){
return  (
   
       <div>
          
         

         {notesarray.map((notes, index) => (
           <NotesCard key={index} note={notes}/>
      ))}
        <Button className='buttons' onClick={()=>setShowNotesForm(true)} >Create new Note</Button>
        
       </div>
   
  );
}else{
return(
  <CreateNotes create={updatenotesarray}/>
)
}
}
export default NotesPage;
