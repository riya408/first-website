
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Signup from "./SignUp/Signup";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} >   </Route>
        <Route path="/login" element={<Login/>} >   </Route>
        <Route path="/Signup" element={<Signup/>} >   </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
