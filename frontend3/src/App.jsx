import "./assets/reset.scss";
import "./assets/home.scss";
import "./assets/layout.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import MainLayout from "./layouts/MainLayout";
import Add from "./pages/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
