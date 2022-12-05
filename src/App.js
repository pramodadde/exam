import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import Studentlogin from "./components/Studentlogin";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/studentlogin" element={<Studentlogin />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Result" element={<Result />} />

      </Routes>
    </Router>

  );
}

export default App;
