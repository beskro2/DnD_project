
import './App.css';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';

function App() {
  return (
    <div> 
      <NavBarComp/>
    

     
      <Outlet/>
   

    </div>
    
  );
}

export default App;
