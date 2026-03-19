import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import State from "./pages/State";
import Temple from "./pages/Temple";

function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state/:stateName" element={<State />} />
        <Route path="/temple/:id" element={<Temple />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;