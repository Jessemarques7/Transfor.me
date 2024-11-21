import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CadrastoCampanha from "./pages/CadrastoCampanha";
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
        <Route path="cadastro" element={<CadrastoCampanha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
