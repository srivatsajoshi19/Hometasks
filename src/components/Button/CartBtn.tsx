import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const cartBooks = useSelector((state: any) => state.allBooks.booksInCart);

  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({cartBooks.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
