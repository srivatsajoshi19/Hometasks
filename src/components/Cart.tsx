import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeFromCart } from "../state/actions/bookActions";

const Cart = () => {
  const books:any[] = useSelector((state:any) => state.allBooks.booksInCart);
  const dispatch = useDispatch();

  const handleClose = (book:{}) => {
    dispatch(removeFromCart(book));
  };

  const cartItems = (book:any) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={book.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(book)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={book.imageLink}
                alt={book.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{book.title}</h3>
              <p className="lead fw-bold">${book.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {books.length === 0 && emptyCart()}
      {books.length !== 0 && books.map(cartItems)}
      {books.length !== 0 && button()}
    </>
  );
};

export default Cart;
