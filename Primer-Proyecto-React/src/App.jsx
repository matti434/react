import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Challenges/Challenge20/views/Home";
import Menu from './Challenges/Challenge20/shared/Menu';
import Login from "./Challenges/Challenge20/views/Login"; // Descomenta esta línea
import Footer from "./Challenges/Challenge20/shared/Footer";
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu/>
        <Login />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>      
      </div>
    </Router>
  );
}

export default App;