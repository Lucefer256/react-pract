import './App.css';
import Nav from './componants/nav';
import Add from './componants/add';
import Case from './componants/case';
import ClassComp from './componants/classcomp';
import Showhide from './componants/showhide'
import Todo from './componants/todo';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      
      <Router>
      <Nav/>
      <div className="container my-3" >
      {/* <Add/> */}
      {/* <Case/> */}
      {/* <ClassComp/>
      <Showhide/> */}
      <Routes>
          <Route exact path="/todo" element={<Todo />}>
            
          </Route>
          
          
          <Route exact path="/" element={<Add/>}>
            
          </Route>
      </Routes>
      
      </div>
      </Router>
    </div>
  );
}

export default App;
