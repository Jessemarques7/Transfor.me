import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CadastroCampanha from "./pages/CadastroCampanha";
import Explore from "./pages/Explore";
import Projeto from "./pages/Projeto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sobre" element={""} />
        <Route path="explore" element={<Explore />} />
        <Route path="projeto" element={<Projeto />} />
        <Route path="cadastro" element={<CadastroCampanha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
