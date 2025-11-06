import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Challenges/Challenge20/views/Home";
import Menu from './Challenges/Challenge20/shared/Menu';
import Login from "./Challenges/Challenge20/views/Login";
import Registro from './Challenges/Challenge20/views/Registro';
import Footer from "./Challenges/Challenge20/shared/Footer";
import './Challenges/Challenge20/views/App.css';
import { verificarYOfrecerRestauracion, inicializarSistemaBackup } from './Challenges/Challenge20/utils/authHelpers';

function App() {
  verificarYOfrecerRestauracion();
  inicializarSistemaBackup();

  return (
    <Router>
      <Menu />
      <Login />
      <Registro />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;