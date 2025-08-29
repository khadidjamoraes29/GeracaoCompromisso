import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import FaleConosco from "./routes/FaleConosco";
import Comprar from "./routes/Comprar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/comprar" element={<Comprar />} />
      </Routes>
    </BrowserRouter>
  );
}
