import { useDispatch} from "react-redux";
import { addBooksToCart} from "../state/actions/bookActions";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookComponent = ({ book }: any) => {
  const navigate = useNavigate();
  const { id, imageLink, title, price, author, pages } = book;
  const [btnClick, setBtnClick] = useState(false);

  const dispatch = useDispatch();

  const handleAddCart = (book: any) => {
    setBtnClick(true);
    dispatch(addBooksToCart(book));
  };
  const handleBuyNow = (book: any) => {
    setBtnClick(true);
    dispatch(addBooksToCart(book));
    navigate("/checkout");
  };

  return (
    <div>
      <div className="card my-2" style={{ width: "18rem" }}>
        <Link to={"/books/" + id}>
          <div className="book-img">
            <img src={imageLink} alt="book-img" />
          </div>
          <div className="fw-bold">{title}</div>
          <div className="fst-italic">{author}</div>
          <div>Pages {pages}</div>
          <div className="text-primary">Price: ${price}</div>
        </Link>
        <div className="my-2">
          <button
            className={
              "btn btn-primary mx-2 cartBtn" + (btnClick ? " disabled" : "")
            }
            onClick={() => handleAddCart(book)}
          >
            Add To Cart
          </button>
          <button
            className={
              "btn btn-primary  cartBtn" + (btnClick ? " disabled" : "")
            }
            onClick={() => {
              handleBuyNow(book);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
