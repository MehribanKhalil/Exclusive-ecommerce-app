import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignUp from "./pages/SignUpPage";
import LogIn from "./pages/LogInPage";
import Cart from "./pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
