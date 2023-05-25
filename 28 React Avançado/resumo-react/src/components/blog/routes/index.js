import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts, Post } from "../posts";
import Cards from "../../cards";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Cards />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
