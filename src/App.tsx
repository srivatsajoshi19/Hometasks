import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BookDetail from "./components/BookDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/BookListing";
import MyOrders from "./components/MyOrders";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/books/:bookId" element={<BookDetail/>} />
        <Route path="/my-orders" element={<MyOrders/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
