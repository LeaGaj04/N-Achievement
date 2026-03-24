import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Juego from "./pages/Juego";
import Perfil from "./pages/Perfil";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego/:id" element={<Juego />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
