import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "../pages/info";
import Home from "../pages/home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/info/:id" element={<Info />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
