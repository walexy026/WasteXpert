// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage/Homepage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Agent from "./Pages/Agent/Agent";
import PickUp from "./Pages/PickUp/PickUp";
import AgentForm from "./Pages/AgentForm/AgentForm"
import Collectors from "./Pages/Collectors/Collectors"
import CollectorForm from "./Pages/CollectorForm/CollectorForm"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />}/>        
          <Route path='/AboutUs' element={<AboutUs />}/>        
          <Route path='/Agent' element={<Agent />}/> 
          <Route path='/PickUp' element={<PickUp />}/> 
          <Route path='/AgentForm' element={<AgentForm />}/>        
          <Route path='/Collectors' element={<Collectors />}/>        
          <Route path='/CollectorForm' element={<CollectorForm />}/>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
