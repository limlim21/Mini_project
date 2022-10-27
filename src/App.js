import './App.css';
import Home from "./component/Home.jsx";
import Navbar from './component/Navbar/Navbar.jsx';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
    </Routes>
  );
}

export default App;
