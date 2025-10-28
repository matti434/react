import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Challenges/Challenge20/views/Home";
import Login from "./Challenges/Challenge20/views/Login";
import Products from "./Challenges/Challenge20/views/Productos";
import Registro from "./Challenges/Challenge20/views/Registro";
import Menu from "./Challenges/Challenge20/shared/Menu";
import Footer from "./Challenges/Challenge20/shared/Footer";
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
        <Footer/>      
      </div>
    </Router>
  );
}

export default App;