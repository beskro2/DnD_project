import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotesPage from './pages/NotesPage';
import MyCharacterPage from './pages/MyCharacterPage';
import CharacterLibraryPage from './pages/CharacterLibraryPage';
import BagOfHoldingPage from './pages/BagOfHoldingPage';

import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[ {
      path: "/MyCharacter",
      element:<MyCharacterPage/>
    }
    ,
    {
      path: "/notes",
      element:<NotesPage/>
    }
    ,
    {
      path: "/CharacterLibrary",
      element:<CharacterLibraryPage/>
    }
    ,
    {
      path: "/BagOfHolding",
      element:<BagOfHoldingPage/>
    },
 ]
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
