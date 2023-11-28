import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesCard from 'C:/Users/eskro/OneDrive/fall 2023 classes/Human computer interactions/DnD_project/dnd_project/src/components/NotesCard';
import Button from 'react-bootstrap/Button';
function NotesPage() {
  return (
   
       <div>
         <Button href="/CreateNote">Create new Note</Button> 
        <NotesCard/>
        <p>
         notes page
        </p>
       </div>
   
  );
}

export default NotesPage;
