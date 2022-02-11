import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBooksToCart, removeFromCart, selectedBook } from "../state/actions/bookActions";

const BookDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const {bookId}  = useParams();
  const dispatch = useDispatch();
  let book = useSelector((state: any) => state.allBooks.selectedBook);
  const { id, imageLink, title, price, author, pages } = book;
  console.log(book);

  const fetchBookDetail = async (bookId: number) => {
    const response:any = await axios
      .get('http://localhost:3000/books/'+ bookId)
      .catch((err) => console.log(err));
      dispatch(selectedBook(response.data))
  };

  useEffect(() => {
    fetchBookDetail(Number(bookId));
  }, [bookId]);

  const handleCart = (book:any) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addBooksToCart(book));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(removeFromCart(book));
      setCartBtn("Add to Cart");
    }
  };
  
  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={imageLink} alt={title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{title}</h1>
            <p>{author}</p>
            <hr />
            <h2 className="my-4">$ {price}</h2>
            <p className="lead">{pages} Pages</p>
            <button
              onClick={() => handleCart(book)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
