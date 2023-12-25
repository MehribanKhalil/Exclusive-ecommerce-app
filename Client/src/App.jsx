import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignUp from "./pages/SignUpPage";
import LogIn from "./pages/LogInPage";
import Cart from "./pages/Cart";
import WishlistPage from "./pages/WishlistPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import CheckOutPage from "./pages/CheckOutPage";
import AccountPage from "./pages/AccountPage";

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
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/account" element={<AccountPage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
