import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sobre" element={""} />
        <Route path="explore" element={""} />
        <Route path="campanha" element={""} />
        <Route path="cadastro" element={""} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
